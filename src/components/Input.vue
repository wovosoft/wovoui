<template>
    <input
        :type="type"
        :value="modelValue"
        @input="e=>$emit('update:modelValue',type==='number'?Number(e.target.value):e.target.value)"
        :class="classes"
        v-bind="attributes"
    />
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {ButtonSizes, HTMLInputTypes} from "../types";

const props = defineProps({
    type: {type: String as PropType<HTMLInputTypes>, default: "text"},
    size: {type: String as PropType<ButtonSizes>, default: null},
    plain: {type: Boolean as PropType<boolean>, default: false},
    state: {type: Boolean as PropType<boolean>, default: null},
    modelValue: {type: [Number, String] as PropType<number | string>, default: null}
});

const emits = defineEmits<{
    (e: "update:modelValue", value: string | null | number): void
}>();


const attributes = computed(() => {
    let attributes = {};
    if (props.state !== null) {
        attributes = {
            "aria-invalid": props.state === false
        };
    }
    return attributes;
});

const classes = computed(() => ({
    ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
    "form-range": props.type === "range",
    "is-valid": props.state === true,
    "is-invalid": props.state === false,
    ["form-control-" + props.size]: !!props.size,
    "form-control-color": props.type === "color"
}))
</script>