<template>
    <input
        :value="modelValue"
        @input="e=>$emit('update:modelValue',Number(e.target.value))"
        :min="min"
        :max="max"
        :step="step"
        type="range"
        class="form-range"
    />
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Range",
    props: {
        min: {type: Number as PropType<number>, default: null},
        max: {type: Number as PropType<number>, default: null},
        step: {type: Number as PropType<number>, default: 1},
        modelValue: {type: Number as PropType<number>, default: 0}
    }
})
</script>
