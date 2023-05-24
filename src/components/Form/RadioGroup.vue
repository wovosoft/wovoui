<template>
    <div role="group">
        <Radio
            :name="theName"
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :disabled="option.disabled===true"
            v-model="model"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Radio>
    </div>
</template>

<script lang="ts" setup>
import {computed, PropType, ref} from "vue";
import {makeString} from "../../composables/useProps";
import Radio from "./Radio.vue";
import {uid} from "../../composables/useHelpers";

const props = defineProps({
    modelValue: {default: null},
    options: {type: Array as PropType<any>, default: () => ([])},
    textField: makeString(null),
    valueField: makeString(null),
    inline: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    name: makeString(null)
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