<script lang="ts" setup>
import type {ModalDialogProps} from "@/index";

withDefaults(defineProps<ModalDialogProps>(), {
    tag: 'div',
});
</script>

<template>
    <component
        :is="tag"
        class="modal-dialog"
        :class="{
            ['modal-' + size]: size,
            ['modal-fullscreen' + (typeof fullscreen === 'string' ? ('-' + fullscreen) : '')]: !!fullscreen,
            'modal-dialog-scrollable': scrollable,
            'modal-dialog-centered': centered
        }">
        <slot></slot>
    </component>
</template>