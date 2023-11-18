<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts" setup>
import {DropdownHeader} from "./index";
import type {DropdownGroupPropsInterface} from "@/components/Dropdown/useDropdown";

withDefaults(defineProps<DropdownGroupPropsInterface>(), {
    headerTag: 'h6',
    headerWrapper: 'li'
})
</script>