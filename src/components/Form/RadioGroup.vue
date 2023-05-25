<template>
    <div role="group">
        <Radio
            :name="theName"
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :disabled="option.disabled===true"
            v-model="model"
            :required="required || option?.required"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Radio>
    </div>
</template>

<script lang="ts" setup>
import {computed, PropType, ref} from "vue";
import {makeBoolean, makeString} from "../../composables/useProps";
import Radio from "./Radio.vue";
import {uid} from "../../composables/useHelpers";

const props = defineProps({
    modelValue: {default: null},
    options: {type: Array as PropType<any>, default: () => ([])},
    textField: makeString(null),
    valueField: makeString(null),
    inline: makeBoolean(false),
    name: makeString(null),
    required: makeBoolean(false)
});

const theName = computed(() => props.name || "radio-group-" + uid());
const emit = defineEmits<{
    (e: 'update:modelValue', value: any)
}>();

const model = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:modelValue', value);
    }
});
</script>