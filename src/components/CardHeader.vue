<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {ref} from "vue";

export default {
  name: "CardHeader",
  props: {
    content: makeString(),
    variant: makeString(),
    borderVariant: makeString(),
    tag: makeString("div"),
    textVariant: makeString()
  },
  setup(props, context) {
    let classes = ref([]);
    classes.value = [
      "card-header",
      {
        ["bg-" + props.variant]: !!props.variant,
        ["text-" + props.textVariant]: !!props.textVariant,
        ["border-" + props.borderVariant]: !!props.borderVariant,
      }
    ];
    return {
      classes
    }
  }
}
</script>
