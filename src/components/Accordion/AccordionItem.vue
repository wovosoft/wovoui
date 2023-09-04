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
import {inject, ref, watch} from "vue";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import Collapse from "./Collapse";
import type {
  registerItem as registerItemType,
  setActiveItem as setActiveItemType,
  AccordionItemStateType
} from "@/index";

import {makeBoolean, makeClass, makeString} from "@/composables/useProps";

const props = defineProps({
  header: makeString(),
  modelValue: makeBoolean(false),
  bodyClass: makeClass()
});


const visible: AccordionItemStateType = ref(props.modelValue);
const registerItem = inject('registerItem') as registerItemType;

registerItem(visible);

const setActiveItem = inject("setActiveItem") as setActiveItemType;

watch(visible, value => {
  if (value) {
    setActiveItem(visible);
  }
});
</script>