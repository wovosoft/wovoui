<template>
    <div class="accordion" :class="{'accordion-flush':flush}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AccordionItem from "./AccordionItem.vue";
import {makeBoolean, makeNumber} from "../shared/properties";

export default defineComponent({
    name: "Accordion",
    components: {AccordionItem},
    props: {
        modelValue: makeNumber(null),
        flush: makeBoolean(false),
        alwaysOpen: makeBoolean(false)
    },
    provide() {
        return {
            alwaysOpen: this.alwaysOpen
        }
    }
})
</script>
