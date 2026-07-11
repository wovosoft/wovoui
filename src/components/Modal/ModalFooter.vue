<script lang="ts" setup>
import {type ModalFooterProps} from "@/components";

withDefaults(defineProps<ModalFooterProps>(), {
    tag: 'div'
});
</script>

<template>
    <component
        :is="tag"
        class="modal-footer"
        :class="{['text-bg-' + variant]: variant, 'py-1': shrink}">
        <slot></slot>
    </component>
</template>