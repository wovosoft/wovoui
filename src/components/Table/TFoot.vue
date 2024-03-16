<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <tfoot :class="getTableCommonClasses($props)">
    <slot></slot>
    </tfoot>
</template>