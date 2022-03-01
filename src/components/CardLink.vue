<template>
    <a :href="href" class="card-link">
        <slot></slot>
    </a>
</template>
<script lang="ts">
import {makeString} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
    name: "CardLink",
    props: {
        href: makeString("#")
    }
})
</script>
