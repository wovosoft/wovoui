<template>
    <progress :value="value" :max="max">
        <slot/>
    </progress>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

defineProps({
    value: [String, Number] as PropType<string | number>,
    max: [String, Number] as PropType<string | number>,
});
</script>
