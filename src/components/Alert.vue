<template>
  <div v-if="modelValue" :class="styles.classes" role="alert">
    <slot></slot>
    <ButtonClose @click="$emit('update:modelValue',false)" v-if="dismissible"/>
  </div>
</template>

<script>
import {reactive, ref} from "vue";
import {boolTrue, makeString} from "../shared/properties";
import ButtonClose from "./ButtonClose.vue";

export default {
  emits: ["update:modelValue"],
  components: {ButtonClose},
  props: {
    variant: makeString("primary"),
    dismissible: boolTrue,
    modelValue: {
      type: Boolean,
      default: null
    },
    timeout: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    let styles = reactive({
      classes: [
        "alert",
        {
          ["alert-" + props.variant]: !!props.variant
        },
        {
          "alert-dismissible": props.dismissible
        }
      ]
    });
    return {
      styles,
      interval: ref(null)
    }
  },
  mounted() {
    if (this.timeout) {
      this.interval = setTimeout(() => this.$emit("update:modelValue", false), this.timeout);
    }
  },
  beforeUnmount() {
    clearTimeout(this.interval);
  }
}
</script>
