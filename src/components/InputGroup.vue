<template>
  <div :class="classes" role="group">
    <slot name="prepend"></slot>
    <slot></slot>
    <slot name="append"></slot>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";

const props = defineProps({
  size: makeString(),
  noWrap: makeBoolean(false)
});
const classes = reactive([
  "input-group",
  {
    ["input-group-" + props.size]: !!props.size,
    "flex-nowrap": props.noWrap
  }
]);
</script>