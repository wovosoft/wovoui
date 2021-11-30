<template>
  <li role="menuitem">
    <button
        class="dropdown-item"
        type="button"
        :class="{'active':active,'disabled':disabled}">
      <slot></slot>
    </button>
  </li>
</template>

<script lang="ts">
import {makeBoolean} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
  name: "DropdownButton",
  props: {
    active: makeBoolean(false),
    disabled: makeBoolean(false)
  }
})
</script>