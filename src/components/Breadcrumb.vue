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

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";

export default defineComponent({
    name: "Breadcrumb",
    components: {BreadcrumbItem},
    props: {
        tag: {type: String as PropType<string>, default: "ol"},
        items: {type: Array as PropType<Array<any>>, default: () => []},
        divider: {type: String as PropType<string>, default: null}
    },
    setup(props) {
        return {
            classes: computed(() => [
                "breadcrumb"
            ])
        }
    }
})
</script>
