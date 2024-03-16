<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <tbody :class="getTableCommonClasses($props)">
    <slot></slot>
    </tbody>
</template>