<template>
    <component :is="tag" class="grid">
        <slot></slot>
    </component>
</template>
<script>
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "Grid",
    props: {
        tag: makeString("div"),
    }
})
</script>