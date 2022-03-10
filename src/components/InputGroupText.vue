<template>
    <component :is="tag" class="input-group-text">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "InputGroupText",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "span"}
    }
})
</script>
