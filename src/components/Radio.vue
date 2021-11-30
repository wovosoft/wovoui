<template>
  <div class="form-check">
    <input class="form-check-input" type="radio" :name="name" :id="identifier">
    <label class="form-check-label" :for="identifier">
      <slot></slot>
    </label>
  </div>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {ref} from "vue";

export default {
  name: "InputRadio",
  props: {
    name: makeString(null),
    id: makeString(null)
  },
  setup(props, context) {
    const identifier = ref(null);
    if (props.id) {
      identifier.value = props.id;
    } else {
      identifier.value = "radio_id" + (Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));
    }
    return {
      identifier
    }
  }
}
</script>
