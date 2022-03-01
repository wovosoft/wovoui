<template>
    <component :is="tag" class="offcanvas-title">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "OffCanvasTitle",
    props: {
        tag: makeString("h5")
    }
})
</script>