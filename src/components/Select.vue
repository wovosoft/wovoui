<template>
  <select :class="classes" v-model="model">
    <slot></slot>
    <option v-for="(o,ok) in options"
            :value="getEntity($props,o,'valueField')"
            :disabled="disabledField && o[disabledField]"
            :key="ok">
      {{ getEntity($props, o, 'textField') }}
    </option>
  </select>
</template>

<script setup>
import {reactive, ref} from "vue";
import {make, makeString} from "../shared/properties.js";
import {getEntity} from "../shared/properties.js";

const props = defineProps({
  size: makeString(),
  options: make(Array, []),
  valueField: make([Function, String], null),
  textField: make([Function, String], null),
  disabledField: makeString(null),
  modelValue: {
    default: null
  }
});
const classes = reactive([
  "form-select",
  {
    ["form-select-" + props.size]: !!props.size
  }
]);
const model = ref(props.modelValue);
</script>
<script>
export default {
  watch: {
    modelValue(value) {
      this.model = value;
    },
    model(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>