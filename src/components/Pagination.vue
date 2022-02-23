<template>
    <component :is="tag" :class="classes">
        <slot v-if="$slots.default"></slot>
        <template v-else-if="pageCount<=(firstColPageCount + centerColPageCount + lastColPageCount)">
            <PageItem v-for="page in pageCount"
                      @click="state=page"
                      :active="state===page">
                {{ page }}
            </PageItem>
        </template>
        <template v-else-if="pageCount>0">
            <template v-if="firstBlock.length>0">
                <template v-for="page in firstBlock">
                    <PageItem v-if="page<=pageCount"
                              @click="state=page"
                              :active="state===page">
                        {{ page }}
                    </PageItem>
                </template>
                <PageItem disabled v-if="centerBlock.length>0">
                    <ThreeDots/>
                </PageItem>
            </template>
            <template v-if="pageCount > firstColPageCount">
                <template v-for="page in centerBlock">
                    <PageItem v-if="page<=pageCount && !lastBlock.includes(page) && !firstBlock.includes(page)"
                              @click="state=page"
                              :active="state===page">
                        {{ page }}
                    </PageItem>
                </template>
            </template>
            <template v-if="(pageCount > firstColPageCount && lastBlock.length>0)">
                <PageItem disabled>
                    <ThreeDots/>
                </PageItem>
                <template v-for="page in lastBlock">
                    <PageItem v-if="page<=pageCount"
                              @click="state=page"
                              :active="state===page">
                        {{ page }}
                    </PageItem>
                </template>
            </template>
        </template>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref, watch} from "vue";
import PageItem from "./PageItem.vue";
import {ThreeDots} from "@wovosoft/wovoui-icons";

export default defineComponent({
    name: "Pagination",
    components: {PageItem, ThreeDots},
    emits: ["update:modelValue", "update:currentPage"],
    props: {
        tag: {type: String as PropType<'ul' | 'div' | string>, default: 'ul'},
        modelValue: {type: Number as PropType<number>, default: 1},

        totalRows: {type: Number as PropType<number>, default: 0},
        perPage: {type: Number as PropType<number>, default: 15},
        currentPage: {type: Number as PropType<number>, default: 1},

        size: {type: String as PropType<'lg' | 'sm' | null>, default: null},
        align: {type: String as PropType<'center' | 'end' | 'right' | null>, default: null},

        firstColPageCount: {type: Number as PropType<number>, default: 3},
        centerColPageCount: {type: Number as PropType<number>, default: 3},
        lastColPageCount: {type: Number as PropType<number>, default: 3},
    },
    setup(props, context) {
        //internal state, needed when props.currentPage not defined in calling component.
        const state = ref(props.currentPage);
        watch(state, page => {
            context.emit('update:modelValue', page);
            context.emit('update:currentPage', page);
        });

        watch(() => props.currentPage, page => state.value = page);
        watch(() => props.modelValue, page => state.value = page);

        const pageCount = computed(() => {
            if (Number(props.perPage)) {
                return Math.ceil(Number(props.totalRows) / Number(props.perPage))
            }
            return 0;
        });

        const firstBlock = computed(() => {
            if (pageCount.value < props.firstColPageCount) {
                return [...Array(pageCount.value).keys()].map(i => i + 1)
            }
            if (state.value > props.firstColPageCount) {
                return [...Array(props.firstColPageCount).keys()].map(i => i + 1);
            }
            if (state.value <= props.firstColPageCount) {
                let count = pageCount.value - lastBlock.value.length;
                if (count > props.firstColPageCount) {
                    count = props.firstColPageCount;
                }
                return [...Array(count).keys()].map(i => i + 1);
            }
            return [];
        });
        const centerBlock = computed(() => {
            let items = [];
            // let half = Math.round(props.centerColPageCount / 2);
            if (state.value > props.firstColPageCount && state.value < (pageCount.value - props.lastColPageCount)) {
                for (let x = 0; x < props.centerColPageCount; x++) {
                    if (props.centerColPageCount % 2 === 0) {

                    }
                    items.push(x - 1);
                }
            }
            return items.map(i => i + state.value);
        });

        const lastBlock = computed(() => {
            if (pageCount.value >= (props.firstColPageCount + props.centerColPageCount)) {
                let items = [];
                for (let x = pageCount.value - props.lastColPageCount; x <= pageCount.value; x++) {
                    items.push(x);
                }
                return items;
            }
            return [];
        });
        const setPage = (page) => state.value = page;
        return {
            firstBlock,
            centerBlock,
            lastBlock,
            classes: computed(() => [
                "pagination", {
                    ["pagination-" + props.size]: props.size,
                    ["justify-content-" + ((props.align === 'end' || props.align === 'right') ? 'end' : props.align)]: props.align
                }
            ]),
            pageCount,
            state,
            setPage
        }
    }
})
</script>