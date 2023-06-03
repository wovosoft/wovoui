<template>
    <component :is="tag" v-on-click-outside="onClickOutside">
        <slot name="toggle" :onclickToggle="onclickToggle"></slot>
        <slot></slot>
    </component>
</template>
<script lang="ts" setup>
import {PropType} from "vue";
import {vOnClickOutside} from "@/directives";

const props = defineProps({
    tag: {
        type: String as PropType<keyof HTMLElementTagNameMap>,
        default: 'div'
    },
    modelValue: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    popperOptions: {default: null}
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();


function onClickOutside(e) {
    if (props.modelValue) {
        emit('update:modelValue', !props.modelValue);
    }
}

function onclickToggle() {
    emit('update:modelValue', !props.modelValue);
}

</script>