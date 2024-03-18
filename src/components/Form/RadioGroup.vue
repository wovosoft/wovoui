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
import {computed} from "vue";
import {Radio, RadioGroupProps} from "@/components";
import {uid} from "@/composables/useHelpers";

const props = withDefaults(defineProps<RadioGroupProps>(), {
    options: () => [],
});

const theName = computed(() => props.name || "radio-group-" + uid());
const model = defineModel();
</script>