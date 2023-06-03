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
import {inject, Ref, ref, watch} from "vue";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody";
import Collapse from "./Collapse";
import type {registerItem as registerItemType, setActiveItem as setActiveItemType} from "../../types";
import {makeBoolean, makeClass, makeString} from "@/composables/useProps";

const props = defineProps({
    header: makeString(),
    modelValue: makeBoolean(false),
    bodyClass: makeClass()
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: unknown)
}>();

const visible: Ref<boolean> = ref(props.modelValue);
const registerItem = inject<registerItemType>('registerItem');

registerItem(visible);

const setActiveItem = inject<setActiveItemType>("setActiveItem");

watch(visible, value => {
    if (value) {
        setActiveItem(visible);
    }
});
</script>