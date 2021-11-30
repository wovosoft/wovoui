<template>
  <component :is="tag" class="accordion-header">
    <component
        @click="$emit('update:modelValue',!modelValue)"
        :is="toggleTag" class="accordion-button"
        :type="toggleTag==='button'?'button':null"
        :class="{'collapsed':!modelValue}"
        :aria-expanded="modelValue">
      <slot></slot>
    </component>
  </component>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";

export default {
  name: "AccordionHeader",
  emits: ['update:modelValue'],
  props: {
    tag: makeString("h2"),
    toggleTag: makeString("button"),
    modelValue: makeBoolean(false)
  }
}
</script>