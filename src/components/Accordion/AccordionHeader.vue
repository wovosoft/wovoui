<script lang="ts" setup>
import {type AccordionHeaderProps} from "@/components";

withDefaults(defineProps<AccordionHeaderProps>(), {
  tag: 'h2',
  toggleTag: 'button',
});

const model = defineModel<boolean>();
</script>

<template>
  <component :is="tag" class="accordion-header">
    <component :is="toggleTag"
               :type="toggleTag === 'button' ? 'button' : null"
               :aria-expanded="model"
               @click="() => model=!model"
               :class=" {'accordion-button': true, 'collapsed': !model}">
      <slot></slot>
    </component>
  </component>
</template>