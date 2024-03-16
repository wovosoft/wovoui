<script lang="ts" setup>
import {AccordionHeaderProps} from "@/components";

const props = withDefaults(defineProps<AccordionHeaderProps>(), {
    tag: 'h2',
    toggleTag: 'button',
})

defineEmits<{
    'update:modelValue': [value: boolean]
}>();
</script>
<template>
    <component :is="tag" class="accordion-header">
        <component :is="toggleTag"
                   :type="toggleTag === 'button' ? 'button' : null"
                   :aria-expanded="modelValue"
                   @click="() => $emit('update:modelValue', !modelValue)"
                   :class=" {'accordion-button': true, 'collapsed': !props.modelValue}">
            <slot></slot>
        </component>
    </component>
</template>