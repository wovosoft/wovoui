<template>
  <textarea
      :class="classes"
      :value="modelValue"
      @input="e=>$emit('update:modelValue',e.target.value)"
  />
</template>

<script>
import {computed} from "vue";
import {makeString} from "./shared/properties.js";

export default {
    name: "Textarea",
    props: {
        size: makeString(),
        modelValue: makeString()
    },
    setup(props) {
        return {
            classes: computed(() => [
                "form-control",
                {
                    ["form-control-" + props.size]: !!props.size
                }
            ])
        }
    }
}
</script>