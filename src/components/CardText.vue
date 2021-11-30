<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script setup>
import {ref} from "vue";
import {makeString} from "../shared/properties.js";

const props = defineProps({
  tag: makeString("p")
});
const classes = ref([]);
classes.value = [
  "card-text"
];
</script>