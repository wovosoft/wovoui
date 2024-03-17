<script lang="ts" setup>
import {ModalHeaderProps} from "@/components";

withDefaults(defineProps<ModalHeaderProps>(), {
    tag: 'div',
});
</script>

<template>
    <component
        :is="tag"
        class="modal-header"
        :class="{['text-bg-' + variant]: variant, 'py-2': shrink}">
        <slot></slot>
    </component>
</template>