<template>
    <details>
        <summary :class="summaryClass" :style="summaryStyle">
            <slot name="summery">{{ summary }}</slot>
        </summary>
        <main :class="detailsClass" :style="detailsStyle">
            <slot>{{ details }}</slot>
        </main>
    </details>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

const props = defineProps({
    summary: String as PropType<string>,
    details: String as PropType<string>,
    detailsClass: {default: null},
    summaryClass: {default: null},
    detailsStyle: {default: null},
    summaryStyle: {default: null},
});
</script>
