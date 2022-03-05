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
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "AccordionHeader",
    emits: ['update:modelValue'],
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h2"},
        toggleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "button"},
        modelValue: {type: Boolean as PropType<boolean>, default: false}
    }
})
</script>