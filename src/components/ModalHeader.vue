<template>
    <component :is="tag" class="modal-header">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "../shared/properties.js";

export default {
    name: "ModalHeader",
    props: {
        tag: makeString("div")
    }
}
</script>
