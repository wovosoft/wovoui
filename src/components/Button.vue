<template>
  <component
      :is="tag"
      :type="type"
      :class="classes"
      v-bind="attributes">
    <slot></slot>
    <Badge v-if="badge" :variant="badgeVariant">
      {{ badge }}
    </Badge>
  </component>
</template>
<script setup>
import {boolFalse, make, makeString} from "../shared/properties";
import Badge from "./Badge.vue";
import {reactive} from "vue";

const props = defineProps({
  tag: makeString("button"),
  variant: makeString("secondary"),
  size: makeString(),
  type: makeString("button"),
  outline: boolFalse,
  block: boolFalse,
  pill: boolFalse,
  squared: boolFalse,
  disabled: boolFalse,
  pressed: boolFalse,
  badge: make([String, Number], null),
  badgeVariant: makeString('primary')
});

let classes = reactive([
  "btn",
  {
    ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: !!props.variant,
    ["btn-" + props.size]: !!props.size,
    'btn-block': props.block,
    'rounded-pill': props.pill,
    'rounded-0': props.squared,
    active: props.pressed
  }
]);

let attributes = {
  disabled: props.disabled,
};
if (props.pressed) {
  attributes["aria-pressed"] = true;
  attributes["autocomplete"] = "off";
}
</script>

<style>
.btn-block {
  width: 100%;
}
</style>