<template>
  <component :is="tag" class="input-group-text">
    <slot></slot>
  </component>
</template>

<script setup>
import {makeString} from "../shared/properties.js";

const props = defineProps({
  tag: makeString("span")
})
</script>
