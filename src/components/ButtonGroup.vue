<template>
  <div :class="classes" role="group" :aria-label="ariaLabel">
    <slot></slot>
  </div>
</template>

<script setup>
import {nullableSize, boolFalse} from "../shared/properties";

const props = defineProps({
  ariaLabel: {
    type: String,
    default: "Button Group"
  },
  size: nullableSize,
  vertical: boolFalse
})
let classes = [
  {
    "btn-group": !props.vertical,
    "btn-group-vertical": props.vertical
  },
  {
    ["btn-group-" + props.size]: !!props.size
  }
];
</script>
