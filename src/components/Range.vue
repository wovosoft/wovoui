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

<script setup>
import {reactive} from "vue";
import {makeNumber} from "../shared/properties.js";

const props = defineProps({
  min: makeNumber(null),
  max: makeNumber(null),
  step: makeNumber(1),
  modelValue: makeNumber(0)
});
const classes = reactive([
  "form-range"
]);
</script>
