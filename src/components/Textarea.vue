<template>
  <textarea :class="classes"
            :value="modelValue"
            @input="e=>$emit('update:modelValue',e.target.value)"></textarea>
</template>

<script>
import {reactive} from "vue";
import {makeString} from "../shared/properties.js";

export default {
  name: "Textarea",
  props: {
    size: makeString(),
    modelValue: makeString()
  },
  setup(props) {
    const classes = reactive([
      "form-control",
      {
        ["form-control-" + props.size]: !!props.size
      }
    ]);
    return {
      classes
    }
  }
}
</script>