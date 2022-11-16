<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import DropdownHeader from "./DropdownHeader.vue";

export default defineComponent({
    name: "DropdownGroup",
    components: {DropdownHeader},
    props: {
        header: {type: String as PropType<string>, default: null},
        headerTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h6"},
        headerWrapper: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
    }
})
</script>