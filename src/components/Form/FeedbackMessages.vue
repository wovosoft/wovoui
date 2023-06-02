<script setup lang="ts">
import {makeString} from "../../composables/useProps";
import Feedback from "./Feedback";

defineOptions({
    inheritAttrs: false
});

const {valid, invalid} = defineProps({
    valid: makeString(),
    invalid: makeString()
});
</script>

<template>
    <Feedback v-if="invalid" type="invalid" :message="invalid"/>
    <Feedback v-if="valid" type="valid" :message="valid"/>
</template>
