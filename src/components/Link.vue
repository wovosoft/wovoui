<template>
    <a :href="href" :target="target">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Link",
    props: {
        href: {type: String as PropType<string>, default: "#"},
        target: {type: String as PropType<string>, default: "_self"}
    }
})
</script>