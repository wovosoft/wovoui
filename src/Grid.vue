<template>
  <component :is="tag" class="grid">
    <slot></slot>
  </component>
</template>
<script>
import {makeString} from "./shared/properties.js";

export default {
  name: "Grid",
  props: {
    tag: makeString("div"),
  }
}
</script>