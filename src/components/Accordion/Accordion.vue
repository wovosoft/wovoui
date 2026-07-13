<script lang="ts" setup>
import {computed, provide, reactive, ref} from "vue";
import {getBinaryClasses} from "@/composables/useClasses";

import type {AccordionItemStateType, AccordionProps} from "@/index";
import {
  RegisterAccordionItemInjectionKey,
  SetActiveAccordionItemInjectionKey
} from "@/index";

const {tag, alwaysOpen, flush} = withDefaults(defineProps<AccordionProps>(), {
  tag: 'div',
});

const model = defineModel<number>();

const activeItem = ref<AccordionItemStateType>();
const items: AccordionItemStateType[] = reactive([]);

provide(RegisterAccordionItemInjectionKey, (item: AccordionItemStateType) => items.push(item));

provide(SetActiveAccordionItemInjectionKey, (item: AccordionItemStateType): void => {
  activeItem.value = item;
  model.value = items.indexOf(item);

  if (!alwaysOpen) {
    items.filter((i: AccordionItemStateType): boolean => i !== item)
        .forEach((i: AccordionItemStateType): boolean => i.value = false);
  }
});

defineExpose({
  toggleAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = !i.value),
  openAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = true),
  collapseAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = false)
});

const classes = computed(() => [
  'accordion', getBinaryClasses({
    accordionFlush: flush
  })
]);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot/>
  </component>
</template>