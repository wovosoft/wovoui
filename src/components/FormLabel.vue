<template>
  <label :class="classes">
    <slot></slot>
  </label>
</template>

<script>
import {makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import {reactive} from "vue";

export default {
  name: "FormLabel",
  props: {
    horizontal: makeBoolean(false),
    sm: makeNumber(null),
    md: makeNumber(null),
    lg: makeNumber(null),
    xl: makeNumber(null),
  },
  setup(props) {
    const classes = reactive({
      "form-label": !props.horizontal,
      "col-form-label": props.horizontal,
      ["col-sm-" + props.sm]: props.horizontal && props.sm,
      ["col-md-" + props.md]: props.horizontal && props.md,
      ["col-lg-" + props.lg]: props.horizontal && props.lg,
      ["col-xl-" + props.xl]: props.horizontal && props.xl,
    });
    return {
      classes
    }
  }
}
</script>