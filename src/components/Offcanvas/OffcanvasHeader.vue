<template>
    <component :is="tag" class="offcanvas-header">
        <OffcanvasTitle v-if="$slots.title || title">
            <slot name="title">
                {{ title }}
            </slot>
        </OffcanvasTitle>
        <slot></slot>
        <ButtonClose
            v-if="showClose"
            :white="btnCloseWhite"
            @click="$emit('update:modelValue',false)"
        />
    </component>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import {ButtonClose, OffcanvasTitle} from "../../index";

defineProps({
    modelValue: {type: Boolean as PropType<boolean>, default: false},
    tag: {type: String as PropType<string>, default: "header"},
    title: {type: String as PropType<string>, default: null},
    showClose: {type: Boolean as PropType<boolean>, default: true},
    btnCloseWhite: {type: Boolean as PropType<boolean>, default: false}
});

defineEmits<{
    (e: "update:modelValue", value: boolean): void
}>();
</script>