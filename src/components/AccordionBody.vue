<template>
    <component :is="tag" class="accordion-body">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "AccordionBody",
    props: {
        tag: {type: String as PropType<string>, default: "div"}
    }
})
</script>
