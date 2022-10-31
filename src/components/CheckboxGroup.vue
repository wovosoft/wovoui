<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            :reverse="reverse"
            :disabled="option.disabled===true"
            v-model="modelValue"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from "./Checkbox.vue";
import {ref, PropType, Ref} from "vue";

const props = defineProps({
    modelValue: {default: null},
    options: {type: Array as PropType<any>, default: () => ([])},
    textField: {type: String as PropType<string>, default: () => null},
    valueField: {type: String as PropType<string>, default: () => null},
    inline: {type: Boolean as PropType<boolean>, default: false},
    switch: {type: Boolean as PropType<boolean>, default: false},
    reverse: {type: Boolean as PropType<boolean>, default: false},
});
</script>