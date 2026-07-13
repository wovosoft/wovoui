<template>
  <component :is="tag" v-on-click-outside="onClickOutside">
    <slot name="toggle" :onclickToggle="onclickToggle"></slot>
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import {vOnClickOutside} from "@/directives";
import type {PopperOptionsType} from "@/index";

withDefaults(defineProps<{
  tag?: keyof HTMLElementTagNameMap;
  popperOptions?: PopperOptionsType;
}>(), {
  tag: 'div'
});

const model = defineModel<boolean>({default: false})


function onClickOutside() {
  if (model.value) {
    model.value = false;
  }
}

function onclickToggle() {
  model.value = !model.value;
}

</script>