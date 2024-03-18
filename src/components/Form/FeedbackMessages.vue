<script setup lang="ts">
import Feedback from "./Feedback.vue";

defineOptions({
    inheritAttrs: false
});

withDefaults(defineProps<{
    valid?: string;
    invalid?: string;
}>(), {});
</script>

<template>
    <Feedback v-if="invalid" type="invalid" :message="invalid"/>
    <Feedback v-if="valid" type="valid" :message="valid"/>
</template>
