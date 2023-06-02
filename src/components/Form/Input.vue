<script setup lang="ts">
import {makeBoolean, makeProp, makeSize} from "../../composables/useProps";
import type {ButtonSizes, HTMLInputTypes} from "../../types";
import {computed, useModel} from "vue";

const props = defineProps({
    //some actions vary based on type so considering at as a prop
    type: makeProp<HTMLInputTypes>('text', String),
    size: makeSize<ButtonSizes>(null),
    plain: makeBoolean(false),
    state: makeBoolean(null),
    modelValue: makeProp<number | string>(null, [Number, String])
});


const model = useModel(props, 'modelValue');

const attrs = {
    /**
     * Should be set only when value is false
     */
    ariaInvalid: props.state === false ? true : null,
    type: props.type
};

const classes = computed(() => ({
    ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
    "form-range": props.type === "range",
    "is-valid": props.state === true,
    "is-invalid": props.state === false,
    ["form-control-" + props.size]: !!props.size,
    "form-control-color": props.type === "color"
}));
</script>

<template>
    <input v-bind="attrs" v-model="model" :class="classes"/>
</template>