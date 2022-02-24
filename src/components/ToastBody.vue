<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
    name: "ToastBody",
    setup(props, context) {
        return {
            classes: computed(() => [
                "toast-body"
            ])
        }
    }
})
</script>