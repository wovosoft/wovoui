<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {});
</script>

<template>
    <th :class="getTableCommonClasses($props)">
        <slot></slot>
    </th>
</template>