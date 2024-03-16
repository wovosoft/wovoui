<template>
    <component :is="tag" class="breadcrumb" :style="{'--bs-breadcrumb-divider': getDivider}">
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
import {computed} from "vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import {BreadcrumbProps} from "@/components";

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    tag: 'ol',
    //@ts-ignore
    items: []
});

const getDivider = computed(() => props.divider ? "'" + props.divider + "'" : null)
</script>
