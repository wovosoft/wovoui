<template>
    <component :is="tag" class="modal-title">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "ModalTitle",
    props: {
        tag: makeString("h5")
    }
})
</script>