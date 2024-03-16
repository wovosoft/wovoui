<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts" setup>
import {DropdownGroupPropsInterface, DropdownHeader} from "./index";

withDefaults(defineProps<DropdownGroupPropsInterface>(), {
    headerTag: 'h6',
    headerWrapper: 'li'
})
</script>