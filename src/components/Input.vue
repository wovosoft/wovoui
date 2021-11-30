<template>
  <input :type="type" :value="modelValue"
         @input="e=>$emit('update:modelValue',e.target.value)"
         :class="classes"
         v-bind="attributes"/>
</template>

<script setup>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {ref} from "vue";

defineEmits(["update:modelValue"]);
const props = defineProps({
  type: makeString("text"),
  size: makeString(),
  plain: makeBoolean(false),
  state: makeBoolean(null),
  modelValue: make([Number, String], null)
});
const classes = ref([]);
classes.value = [
  "form-control" + (props.plain ? "-plaintext" : ""),
  {
    "is-valid": props.state === true,
    "is-invalid": props.state === false,
    ["form-control-" + props.size]: !!props.size,
    "form-control-color": props.type === "color"
  }
];
const attributes = ref({});
if (props.state !== null) {
  attributes.value = {
    "aria-invalid": props.state === false
  };
}
</script>