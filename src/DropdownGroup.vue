<template>
  <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
    {{ header }}
  </DropdownHeader>
  <slot></slot>
</template>

<script>
import {makeString} from "./shared/properties.js";
import DropdownHeader from "./DropdownHeader.vue";

export default {
  name: "DropdownGroup",
  components: {DropdownHeader},
  props: {
    header: makeString(),
    headerTag: makeString("h6"),
    headerWrapper: makeString("li")
  }
}
</script>