<script lang="ts" setup>
import {computed} from "vue";
import {getBinaryClasses} from "@/composables";
import {CardHeaderPropsInterface} from "@/components";

const props = withDefaults(defineProps<CardHeaderPropsInterface>(), {
  tag: "div",
});

const classes = computed(() => [
  "card-header",
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