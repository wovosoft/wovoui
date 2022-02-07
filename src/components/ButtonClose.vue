<template>
    <button type="button"
            :aria-label="ariaLabel"
            :class="{'btn-close-white':white}"
            class="btn-close"></button>
</template>
<script lang="ts">
import {PropType} from "vue";
import {makeString} from "../shared/properties.js";

export default {
    props: {
        white: {type: Boolean as PropType<true | false>, default: () => false},
        ariaLabel: makeString("Close")
    }
}
</script>
