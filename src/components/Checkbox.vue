<template>
  <div :class="classes">
    <input class="form-check-input"
           :required="required"
           :readonly="readonly"
           :disabled="disabled"
           :name="name"
           type="checkbox"
           v-model="model"
           :value="value"
           v-bind="inputAttrs"
           :id="identifier"/>
    <label v-if="$slots.default" class="form-check-label" :for="identifier">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import {makeBoolean, makeString} from "../shared/properties.js";

export default {
  name: "Checkbox",
  emits: ['update:modelValue'],
  props: {
    name: makeString(null),
    id: makeString(null),
    required: makeBoolean(false),
    readonly: makeBoolean(false),
    disabled: makeBoolean(false),
    inline: makeBoolean(false),
    modelValue: {
      default: null
    },
    value: {
      default: true
    },
    uncheckedValue: {
      default: false
    },
    switch: makeBoolean(false)
  },
  setup(props, context) {
    const identifier = ref(null);
    if (props.id) {
      identifier.value = props.id;
    } else {
      identifier.value = "checkbox_id" + (Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));
    }
    const model = ref(props.modelValue);
    const classes = ref([]);
    classes.value = [
      "form-check",
      {
        "form-switch": props.switch,
        "form-check-inline": props.inline,
      }
    ];
    const inputAttrs = ref({});
    if (props.switch) {
      inputAttrs.value.role = "switch";
    }
    return {
      identifier,
      model,
      classes,
      inputAttrs
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
}
</script>
