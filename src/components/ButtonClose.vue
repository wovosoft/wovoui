<template>
    <button type="button"
            :disabled="disabled"
            :aria-label="ariaLabel"
            :class="{'btn-close-white':white}"
            class="btn-close"></button>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    props: {
        white: {type: Boolean as PropType<true | false>, default: () => false},
        ariaLabel: makeString("Close"),
        disabled: {type: Boolean as PropType<true | false>, default: false}
    }
})
</script>
