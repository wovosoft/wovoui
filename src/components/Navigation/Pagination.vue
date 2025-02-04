<template>
    <component :is="tag" :class="classes">
        <slot v-if="$slots.default"></slot>
        <template v-else-if="pageCount<=(firstColPageCount + centerColPageCount + lastColPageCount)">
            <PageItem v-for="page in pageCount"
                      :active="currentState===page"
                      @click.prevent="currentState=page">
                {{ page }}
            </PageItem>
        </template>
        <template v-else-if="pageCount>0">
            <template v-if="firstBlock.length>0">
                <template v-for="page in firstBlock">
                    <PageItem v-if="page<=pageCount"
                              :active="currentState===page"
                              @click.prevent="currentState=page">
                        {{ page }}
                    </PageItem>
                </template>
                <PageItem v-if="centerBlock.length>0" disabled>
                    <ThreeDots/>
                </PageItem>
            </template>
            <template v-if="pageCount > firstColPageCount">
                <template v-for="page in centerBlock">
                    <PageItem v-if="page<=pageCount && !lastBlock.includes(page) && !firstBlock.includes(page)"
                              :active="currentState===page"
                              @click.prevent="currentState=page">
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
                              :active="currentState===page"
                              @click.prevent="currentState=page">
                        {{ page }}
                    </PageItem>
                </template>
            </template>
        </template>
    </component>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import PageItem from "./PageItem.vue";
//@ts-ignore
import {ThreeDots} from "@wovosoft/wovoui-icons";
import type {PaginationProps} from "@/index";

const props = withDefaults(defineProps<PaginationProps>(), {
    tag: 'ul',
    modelValue: 1,
    totalRows: 0,
    perPage: 15,
    currentPage: 1,
    firstColPageCount: 3,
    centerColPageCount: 3,
    lastColPageCount: 3
});

const emit = defineEmits(["update:modelValue", "update:currentPage", "change"]);

//internal state, needed when props.currentPage not defined in calling component.
const currentState = ref<number | null>(props.currentPage);

watch(currentState, page => {
    emit('update:modelValue', page);
    emit('update:currentPage', page);
    emit('change', page);
});

watch(() => props.currentPage, page => currentState.value = page);
watch(() => props.modelValue, page => currentState.value = page);

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

    if (Number(currentState.value) > props.firstColPageCount) {
        return [...Array(props.firstColPageCount).keys()].map(i => i + 1);
    }

    if (Number(currentState.value) <= props.firstColPageCount) {
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
    if (Number(currentState.value) > props.firstColPageCount && Number(currentState.value) < (pageCount.value - props.lastColPageCount)) {
        for (let x = 0; x < props.centerColPageCount; x++) {
            if (props.centerColPageCount % 2 === 0) {

            }
            items.push(x - 1);
        }
    }
    return items.map(i => i + Number(currentState.value));
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
const setPage = (page: number) => currentState.value = page;

const classes = computed(() => [
    "pagination", {
        ["pagination-" + props.size]: props.size,
        ["justify-content-" + ((props.align === 'end' || props.align === 'right') ? 'end' : props.align)]: props.align
    }
]);

defineExpose({
    setPage
});
</script>