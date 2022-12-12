<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            :reverse="reverse"
            :disabled="option.disabled===true"
            @update:modelValue="v=>$emit('update:modelValue',v)"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>

<script lang="ts" setup>
import {Checkbox} from "../..";
import {PropType} from "vue";
import {makeBoolean, makeString} from "../../composables/useProps";

const props = defineProps({
    modelValue: {default: null},
    options: {type: Array as PropType<any>, default: () => ([])},
    textField: makeString(null),
    valueField: makeString(null),
    inline: makeBoolean(false),
    switch: makeBoolean(false),
    reverse: makeBoolean(false),
});
</script>