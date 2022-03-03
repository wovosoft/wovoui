<template>
    <a :href="href" class="card-link">
        <slot></slot>
    </a>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CardLink",
    props: {
        href: {type: String as PropType<string>, default: "#"},
    }
})
</script>
