<template>
    <button type="button"
            :disabled="disabled"
            :aria-label="ariaLabel"
            :class="{'btn-close-white':white}"
            class="btn-close"></button>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Binary} from "../types/Binary";

export default defineComponent({
    props: {
        white: {type: Boolean as PropType<Binary>, default: () => false},
        ariaLabel: {type: String as PropType<string>, default: "Close"},
        disabled: {type: Boolean as PropType<Binary>, default: false}
    }
})
</script>
