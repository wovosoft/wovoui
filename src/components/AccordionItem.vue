<template>
    <div class="accordion-item">
        <AccordionHeader v-model="visible">
            <slot name="header">
                {{ header }}
            </slot>
        </AccordionHeader>

        <Collapse class="accordion-collapse" v-model="visible">
            <AccordionBody>
                <slot></slot>
            </AccordionBody>
        </Collapse>
    </div>
</template>

<script lang="ts">
import {defineComponent, inject, PropType, ref, watch} from "vue";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody";
import Collapse from "./Collapse.vue";
import {Binary} from "../types/Binary";

export default defineComponent({
    name: "AccordionItem",
    emits: ['update:modelValue'],
    components: {AccordionHeader, AccordionBody, Collapse},
    props: {
        header: {type: String as PropType<string>, default: null},
        modelValue: {type: Boolean as PropType<Binary>, default: false}
    },
    setup(props, {}) {
        const visible = ref(props.modelValue);
        inject('registerItem')(visible);
        const setActiveItem = inject("setActiveItem");

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