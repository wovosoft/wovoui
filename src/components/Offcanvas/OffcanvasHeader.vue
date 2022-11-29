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
import {makeBoolean, makeString} from "../../composables/useProps";

defineProps({
    modelValue: makeBoolean(false),
    tag: {type: String as PropType<string>, default: "header"},
    title: makeString(),
    showClose: makeBoolean(true),
    btnCloseWhite: makeBoolean(false)
});

defineEmits<{
    (e: "update:modelValue", value: boolean): void
}>();
</script>