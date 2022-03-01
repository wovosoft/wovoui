<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            v-model="model"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>

<script lang="ts">
import {make, makeBoolean, makeString} from "../shared/properties.js";
import Checkbox from "./Checkbox.vue";
import {ref, defineComponent} from "vue";

export default defineComponent({
    name: "CheckboxGroup",
    components: {Checkbox},
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            default: null
        },
        options: make(Array, []),
        textField: makeString(),
        valueField: makeString(),
        inline: makeBoolean(false),
        switch: makeBoolean(false),
    },
    setup(props, context) {
        const model = ref(props.modelValue);
        return {
            model
        }
    },
    watch: {
        modelValue(value) {
            this.model = value;
        },
        model(value) {
            this.$emit('update:modelValue', value);
        }
    }
})
</script>