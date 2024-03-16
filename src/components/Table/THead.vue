<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <thead :class="getTableCommonClasses($props)">
    <slot></slot>
    </thead>
</template>