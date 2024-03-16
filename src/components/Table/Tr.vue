<script lang="ts" setup>
import {getTableCommonClasses, TableCommonProps} from "./index";

withDefaults(defineProps<TableCommonProps>(), {})
</script>
<template>
    <tr :class="getTableCommonClasses($props)">
        <slot></slot>
    </tr>
</template>