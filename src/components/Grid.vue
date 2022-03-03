<template>
    <component :is="tag" class="grid">
        <slot></slot>
    </component>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Grid",
    props: {
        tag: {type: String as PropType<string>, default: "div"},
    }
})
</script>