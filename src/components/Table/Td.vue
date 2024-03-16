<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <td :class="getTableCommonClasses($props)">
        <slot></slot>
    </td>
</template>