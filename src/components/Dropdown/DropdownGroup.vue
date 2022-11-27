<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import DropdownHeader from "./DropdownHeader.vue";

defineProps({
    header: {type: String as PropType<string>, default: null},
    headerTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h6"},
    headerWrapper: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
});
</script>