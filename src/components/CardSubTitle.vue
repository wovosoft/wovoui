<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {ref} from "vue";

export default {
  name: "CardSubTitle",
  props: {
    title: makeString(),
    tag: makeString("h6"),
    textVariant: makeString("muted")
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "card-subtitle",
      {
        ["text-" + props.textVariant]: !!props.textVariant
      }
    ];
    return {
      classes
    }
  }
}
</script>
