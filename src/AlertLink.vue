<template>
  <a :href="href" class="alert-link">
    <slot></slot>
  </a>
</template>

<script>
import {makeString} from "./shared/properties.js";

export default {
  name: "AlertLink",
  props: {
    href: makeString("#")
  }
}
</script>