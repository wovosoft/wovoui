<template>
    <component :is="tag" class="modal-header">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "ModalHeader",
    props: {
        tag: makeString("div")
    }
})
</script>
