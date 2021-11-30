<template>
    <component :is="tag" class="offcanvas-title">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "../shared/properties.js";

export default {
    name: "OffCanvasTitle",
    props: {
        tag: makeString("h5")
    }
}
</script>