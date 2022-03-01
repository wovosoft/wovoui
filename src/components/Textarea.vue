<template>
  <textarea
      :class="classes"
      :value="modelValue"
      @input="e=>$emit('update:modelValue',e.target.value)"
  />
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
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
})
</script>