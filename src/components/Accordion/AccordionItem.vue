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
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody.vue";
import Collapse from "./Collapse.vue";
import {
    AccordionItemStateType,
    RegisterAccordionItemInjectionKey,
    SetActiveAccordionItemInjectionKey
} from "@/index";

import {makeBoolean, makeClass, makeString} from "@/composables/useProps";

const props = defineProps({
    header: makeString(),
    modelValue: makeBoolean(false),
    bodyClass: makeClass()
});

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