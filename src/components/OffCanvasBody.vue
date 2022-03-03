<template>
    <component :is="tag" class="offcanvas-body">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "OffCanvasBody",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
    }
})
</script>