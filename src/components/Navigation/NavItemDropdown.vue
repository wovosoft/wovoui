<script setup lang="ts">
import {Dropdown, NavItemDropdownPropsInterface} from "@/components";

const props = withDefaults(defineProps<NavItemDropdownPropsInterface>(), {
  isNav: true,
  tag: "li",
  menuTag: "div",
  toggleTag: "button",
  variant: "secondary",
  splitVariant: "secondary",
  dir: "bottom",
  align: "start",
});
</script>

<template>
  <Dropdown class="nav-item" v-bind="props">
    <slot/>
  </Dropdown>
</template>