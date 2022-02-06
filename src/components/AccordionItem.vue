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
import {defineComponent, inject, ref, watch} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";
import AccordionHeader from "./AccordionHeader.vue";
import AccordionBody from "./AccordionBody.vue";
import Collapse from "./Collapse.vue";

export default defineComponent({
    name: "AccordionItem",
    emits: ['update:modelValue'],
    components: {AccordionHeader, AccordionBody, Collapse},
    props: {
        header: makeString(null),
        modelValue: makeBoolean(false)
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