<template>
  <component :is="href?'a':tag" v-bind="attributes" :class="styles.classes">
    <slot></slot>
  </component>
</template>

<script setup>
import {boolFalse, makeString} from "../shared/properties";
import {reactive} from "vue";

const props = defineProps({
  tag: makeString('span'),
  variant: makeString("secondary"),
  pill: boolFalse,
  href: makeString(null)
});
let styles = reactive({
  classes: [
    "badge",
    {
      ["bg-" + props.variant]: !!props.variant
    },
    {
      "rounded-pill": props.pill
    },
    {
      "text-decoration-none":props.href
    }
  ]
});
let attributes = {};
if (props.href) {
  attributes.href = props.href;
  attributes.target = "_self";
}
</script>
