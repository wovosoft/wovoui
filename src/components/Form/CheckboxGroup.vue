<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            :reverse="reverse"
            :disabled="option.disabled===true"
            v-model="model"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from "./Checkbox.vue";
import {CheckboxGroupProps} from "@/components";

withDefaults(defineProps<CheckboxGroupProps>(), {
    options: () => [],
});

const model = defineModel<any[]>({default: []});
</script>