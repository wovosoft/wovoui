<template>
    <input
        :value="modelValue"
        @input="e=>$emit('update:modelValue',Number(e.target.value))"
        :min="min"
        :max="max"
        :step="step"
        type="range"
        :class="classes"
    />
</template>

<script>
import {computed} from "vue";
import {makeNumber} from "./shared/properties.js";

export default {
    name: "Range",
    props: {
        min: makeNumber(null),
        max: makeNumber(null),
        step: makeNumber(1),
        modelValue: makeNumber(0)
    },
    setup(props) {
        return {
            classes: computed(() => [
                "form-range"
            ])
        }
    }
}
</script>
