<template>
  <button type="button"
          aria-label="Close"
          :class="{'btn-close-white':white}"
          class="btn-close"></button>
</template>
<script>
import {makeBoolean} from "../shared/properties";

export default {
  props: {
    white: makeBoolean(false)
  }
}
</script>
