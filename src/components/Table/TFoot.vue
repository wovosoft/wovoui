<script lang="ts" setup>
import {getTableCommonClasses, type TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <tfoot :class="getTableCommonClasses($props)">
    <slot></slot>
    </tfoot>
</template>