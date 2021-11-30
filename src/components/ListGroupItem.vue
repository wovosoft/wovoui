<template>
  <component :is="theTag" :class="classes" v-bind="attributes">
    <slot></slot>
  </component>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties";
import {ref} from "vue";

export default {
  name: "ListGroupItem",
  props: {
    tag: makeString("li"),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    href: makeString(null),
    button: makeBoolean(false),
    variant: makeString(null)
  },
  setup(props, context) {
    const classes = ref([]);
    classes.value = [
      "list-group-item",
      {
        "active": props.active,
        "disabled": props.disabled,
        "list-group-item-action": props.button,
        ["list-group-item-" + props.variant]: !!props.variant
      }
    ];
    const attributes = ref({});
    if (props.active) {
      attributes.value['aria-current'] = props.active;
    }
    if (props.disabled) {
      attributes.value['aria-disabled'] = props.disabled;
    }

    const theTag = ref(props.tag);
    if (props.href) {
      theTag.value = "a";
      attributes.value.href = props.href;
    }
    if (props.button) {
      theTag.value = "button";
    }
    return {
      classes,
      attributes,
      theTag
    }
  }
}
</script>