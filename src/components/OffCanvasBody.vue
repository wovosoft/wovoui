<template>
    <component :is="tag" class="offcanvas-body">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "../shared/properties.js";

export default {
    name: "OffCanvasBody",
    props: {
        tag: makeString("div")
    }
}
</script>