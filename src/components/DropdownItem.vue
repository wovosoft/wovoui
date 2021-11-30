<template>
  <li role="presentation">
    <p class="dropdown-item-text" v-if="isText">
      <slot></slot>
    </p>
    <a class="dropdown-item"
       v-else
       :class="{'active':active,'disabled':disabled}"
       :href="href">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";

export default {
  name: "DropdownItem",
  props: {
    href: makeString("#"),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    isText: makeBoolean(false)
  }
}
</script>