<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {ref} from "vue";

export default {
  name: "CardTitle",
  props: {
    title: makeString(),
    tag: makeString("h4")
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "card-title"
    ];
    return {
      classes
    }
  }
}
</script>
