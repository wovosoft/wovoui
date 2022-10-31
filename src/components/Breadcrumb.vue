<template>
    <component :is="tag" :class="classes">
        <template v-if="items && Array.isArray(items) && items.length">
            <BreadcrumbItem
                v-for="(item,item_key) in items"
                :href="item.href"
                :to="item.to"
                :active="!!item.active"
                :key="item_key">
                {{ item.text ? item.text : item }}
            </BreadcrumbItem>
        </template>
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "ol"},
    items: {type: Array as PropType<any[]>, default: () => []},
    divider: {type: String as PropType<string>, default: null}
});

const classes = computed(() => ["breadcrumb"]);
</script>
