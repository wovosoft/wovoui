<template>
    <component :is="tag" :class="classes">
        <slot v-if="$slots.default"></slot>
        <template v-else-if="pageCount<=(firstColPageCount + centerColPageCount + lastColPageCount)">
            <PageItem v-for="page in pageCount" :active="currentPage===page">
                {{ page }}
            </PageItem>
        </template>
        <template v-else-if="pageCount>0">
            <template v-if="firstBlock.length>0">
                <template v-for="page in firstBlock">
                    <PageItem v-if="page<=pageCount" :active="currentPage===page">
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
                              :active="currentPage===page">
                        {{ page }}
                    </PageItem>
                </template>
            </template>
            <template v-if="(pageCount > firstColPageCount && lastBlock.length>0)">
                <PageItem disabled>
                    <ThreeDots/>
                </PageItem>
                <template v-for="page in lastBlock">
                    <PageItem v-if="page<=pageCount" :active="currentPage===page">
                        {{ page }}
                    </PageItem>
                </template>
            </template>
        </template>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import PageItem from "./PageItem.vue";
import {ThreeDots} from "@wovosoft/wovoui-icons";

export default defineComponent({
    name: "Pagination",
    components: {PageItem, ThreeDots},
    props: {
        tag: {type: String as PropType<'ul' | 'div' | string>, default: 'ul'},
        modelValue: {type: Number, default: 1},

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
            if (props.currentPage > props.firstColPageCount) {
                return [...Array(props.firstColPageCount).keys()].map(i => i + 1);
            }
            if (props.currentPage<=props.firstColPageCount){
                return [...Array(pageCount.value-lastBlock.value.length).keys()].map(i => i + 1);
            }
            return [];
        });
        const centerBlock = computed(() => {
            let items = [];
            let half = Math.round(props.centerColPageCount / 2);
            if (props.currentPage > props.firstColPageCount && props.currentPage < (pageCount.value - props.lastColPageCount)) {
                for (let x = 0; x < props.centerColPageCount; x++) {
                    items.push(x - 1);
                }
            }
            return items.map(i => i + props.currentPage);
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
            pageCount
        }
    }
})
</script>