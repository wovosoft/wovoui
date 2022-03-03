<template>
    <component :is="tag" class="offcanvas-title">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "OffCanvasTitle",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h5"}
    }
})
</script>