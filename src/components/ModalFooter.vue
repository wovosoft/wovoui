<template>
    <div class="modal-footer">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "ModalFooter"
})
</script>