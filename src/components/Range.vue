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

<script lang="ts">
import {computed,defineComponent} from "vue";
import {makeNumber} from "../shared/properties.js";

export default defineComponent({
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
})
</script>
