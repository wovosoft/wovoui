<template>
    <component :is="tag" class="offcanvas-body">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "OffCanvasBody",
    props: {
        tag: makeString("div")
    }
})
</script>