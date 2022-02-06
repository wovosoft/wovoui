<template>
    <component :is="tag" class="accordion-header">
        <component
            @click="$emit('update:modelValue',!modelValue)"
            :is="toggleTag"
            class="accordion-button"
            :type="toggleTag==='button'?'button':null"
            :class="{'collapsed':!modelValue}"
            :aria-expanded="modelValue">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts">
import {makeBoolean, makeString} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
    name: "AccordionHeader",
    emits: ['update:modelValue'],
    props: {
        tag: makeString("h2"),
        toggleTag: makeString("button"),
        modelValue: makeBoolean(false)
    }
})
</script>