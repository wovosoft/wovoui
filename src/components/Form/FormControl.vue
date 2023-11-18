<script setup lang="ts">
import {FormGroup, Input} from "@/components/Form";
import {computed, useModel} from "vue";
import {FormGroupPropsInterface, InputPropsInterface} from "@/components/Form/useFormHelpers";


const props = withDefaults(defineProps<InputPropsInterface & FormGroupPropsInterface & {
    modelValue: string | number
}>(), {
    type: 'text',
    plain: false,
    tag: "div",
    floating: false,
    horizontal: false,
    noMarginBottom: false,
})


const model = useModel(props, 'modelValue');

const InputBindings = computed(() => ({
    type: props.type,
    size: props.size,
    plain: props.plain,
    state: props.state
}));

const FormGroupBindings = computed(() => ({
    tag: props.tag,
    floating: props.floating,
    label: props.label,
    labelFor: props.labelFor,
    horizontal: props.horizontal,
    labelSm: props.labelSm,
    labelMd: props.labelMd,
    labelLg: props.labelLg,
    labelXl: props.labelXl,
    contentSm: props.contentSm,
    contentMd: props.contentMd,
    contentLg: props.contentLg,
    contentXl: props.contentXl,
    noMarginBottom: props.noMarginBottom,
    //form control feedback messages
    validFeedback: props.validFeedback,
    invalidFeedback: props.invalidFeedback,
}));
</script>

<template>
    <FormGroup v-bind="FormGroupBindings">
        <Input v-bind:attrs="$attrs" v-bind="InputBindings" v-model="model"/>
    </FormGroup>
</template>
