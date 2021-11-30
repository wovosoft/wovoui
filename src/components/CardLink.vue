<template>
  <a :href="href" class="card-link">
    <slot></slot>
  </a>
</template>
<script setup>
import {makeString} from "../shared/properties.js";

defineProps({
  href: makeString("#")
})
</script>
