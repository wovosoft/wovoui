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
import {defineComponent} from "vue";
import {makeBoolean, makeTag} from "../composables/useProps";

export default defineComponent({
    name: "AccordionHeader",
    emits: ['update:modelValue'],
    props: {
        tag: makeTag("h2"),
        toggleTag: makeTag("button"),
        modelValue: makeBoolean(false)
    }
})
</script>