<script lang="ts" setup>
import {type ModalBodyProps} from "@/components";

withDefaults(defineProps<ModalBodyProps>(), {
    tag: 'div'
});
</script>
<template>
    <component :is="tag" class="modal-body" :class="{['text-bg-' + variant]: variant}">
        <slot></slot>
    </component>
</template>