<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>

<script>
import {make, makeString} from "./shared/properties.js";
import {reactive} from "vue";

export default {
  name: "GridCol",
  props: {
    tag: makeString("div"),
    col: make([Number, String], null),
    sm: make([Number, String], null),
    md: make([Number, String], null),
    lg: make([Number, String], null),
    xl: make([Number, String], null),
    start: make([Number, String], null),
  },
  setup(props) {
    const classes = reactive({
      ["g-start-" + props.start]: props.start,
      ["g-col-" + props.col]: props.col,
      ["g-col-sm-" + props.sm]: props.sm,
      ["g-col-md-" + props.md]: props.md,
      ["g-col-lg-" + props.lg]: props.lg,
      ["g-col-xl-" + props.xl]: props.xl,
    });
    return {
      classes
    }
  }
}
</script>