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
import Checkbox from "./Checkbox.vue";
import {ref, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CheckboxGroup",
    components: {Checkbox},
    emits: ["update:modelValue"],
    props: {
        modelValue: {default: null},
        options: {type: Array as PropType<any>, default: () => ([])},
        textField: {type: String as PropType<string>, default: null},
        valueField: {type: String as PropType<string>, default: null},
        inline: {type: Boolean as PropType<boolean>, default: false},
        switch: {type: Boolean as PropType<boolean>, default: false},
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