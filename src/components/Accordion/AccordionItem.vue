<template>
  <div class="accordion-item">
    <AccordionHeader v-model="visible">
      <slot name="header">
        {{ header }}
      </slot>
    </AccordionHeader>

    <Collapse class="accordion-collapse" v-model="visible">
      <AccordionBody :class="bodyClass">
        <slot></slot>
      </AccordionBody>
    </Collapse>
  </div>
</template>

<script lang="ts" setup>
import {type HTMLAttributes, inject, ref, watch} from "vue";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody.vue";
import Collapse from "./Collapse.vue";
import {
  type AccordionItemStateType,
  RegisterAccordionItemInjectionKey,
  SetActiveAccordionItemInjectionKey
} from "@/index";

const props = defineProps<{
  header?: string,
  modelValue?: boolean,
  bodyClass?:  HTMLAttributes['class']
}>();

const visible: AccordionItemStateType = ref(props.modelValue);
const registerItem = inject(RegisterAccordionItemInjectionKey);

if (typeof registerItem == 'function') {
  registerItem(visible);
}


const setActiveItem = inject(SetActiveAccordionItemInjectionKey);

if (typeof setActiveItem == 'function') {
  watch(visible, value => {
    if (value) {
      setActiveItem(visible);
    }
  });
}
</script>