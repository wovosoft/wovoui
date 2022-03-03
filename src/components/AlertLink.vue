<template>
    <a :href="href" class="alert-link">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "AlertLink",
    props: {
        href: {type: String as PropType<string>, default: "#"}
    }
})
</script>