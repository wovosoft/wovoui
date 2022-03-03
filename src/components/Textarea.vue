<template>
  <textarea
      :class="classes"
      :value="modelValue"
      @input="e=>$emit('update:modelValue',e.target.value)"
  />
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    name: "Textarea",
    props: {
        size: {type: String as PropType<buttonSizes>, default: null},
        modelValue: {type: String as PropType<string>, default: null}
    },
    setup(props) {
        return {
            classes: computed(() => ([
                "form-control",
                {
                    ["form-control-" + props.size]: !!props.size
                }
            ]))
        }
    }
})
</script>