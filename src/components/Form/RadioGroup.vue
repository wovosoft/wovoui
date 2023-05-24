<template>
    <div role="group">
        <Radio
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :disabled="option.disabled===true"
            @update:modelValue="v=>$emit('update:modelValue',v)"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Radio>
    </div>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import {makeBoolean, makeString} from "../../composables/useProps";
import Radio from "./Radio.vue";

const props = defineProps({
    modelValue: {default: null},
    options: {type: Array as PropType<any>, default: () => ([])},
    textField: makeString(null),
    valueField: makeString(null),
    inline: makeBoolean(false),
});
</script>