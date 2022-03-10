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

<script lang="ts">
import {defineComponent, inject, PropType, Ref, ref, watch} from "vue";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody";
import Collapse from "./Collapse.vue";
import type {setActiveItem as setActiveItemType, registerItem as registerItemType} from "../types/AccordionTypings";

export default defineComponent({
    name: "AccordionItem",
    emits: ['update:modelValue'],
    components: {AccordionHeader, AccordionBody, Collapse},
    props: {
        header: {type: String as PropType<string>, default: null},
        modelValue: {type: Boolean as PropType<boolean>, default: false},
        bodyClass: {type: [Array, Object, String] as PropType<any>, default: null}
    },
    setup(props, {}) {
        const visible: Ref<boolean> = ref(props.modelValue);
        const registerItem = inject<registerItemType>('registerItem');

        registerItem(visible);

        const setActiveItem = inject<setActiveItemType>("setActiveItem");

        watch(visible, value => {
            if (value) {
                setActiveItem(visible);
            }
        });
        return {
            visible
        }
    }
})
</script>