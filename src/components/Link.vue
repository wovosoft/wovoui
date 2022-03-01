<template>
    <a :href="href" :target="target">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
    name: "Link",
    props: {
        href: makeString('#'),
        target: makeString("_self")
    }
})
</script>