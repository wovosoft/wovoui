<template>
    <component :is="tag" class="modal-title">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "../shared/properties.js";

export default {
    name: "ModalTitle",
    props: {
        tag: makeString("h5")
    }
}
</script>