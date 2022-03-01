<template>
    <a :href="href" class="alert-link">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "AlertLink",
    props: {
        href: makeString("#")
    }
})
</script>