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
import {computed} from "vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";
import {makeProp, makeString, makeTag} from "../../composables/useProps";

const props = defineProps({
    tag: makeTag("ol"),
    items: makeProp<any[]>([], Array),
    divider: makeString()
});

const classes = computed(() => ["breadcrumb"]);
</script>
