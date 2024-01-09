<script lang="ts" setup>
import {computed} from "vue";
import {getBinaryClasses} from "@/composables";
import {CardFooterPropsInterface} from "@/components";

const props = withDefaults(defineProps<CardFooterPropsInterface>(), {
  tag: "div",
});

const classes = computed(() => [
  "card-footer",
  getBinaryClasses({
    bg: props.variant,
    text: props.textVariant,
    border: props.borderVariant
  })
]);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot></slot>
  </component>
</template>