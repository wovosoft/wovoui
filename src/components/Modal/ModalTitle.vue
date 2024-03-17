<script lang="ts" setup>
import {HasTag} from "@/components";

withDefaults(defineProps<HasTag>(), {
    tag: "h5"
});
</script>

<template>
    <component :is="tag" class="modal-title">
        <slot></slot>
    </component>
</template>