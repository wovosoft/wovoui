<script lang="ts" setup>
import type {HasTag} from "@/components";

withDefaults(defineProps<HasTag>(), {
    tag: 'span'
})

</script>
<template>
    <component :is="tag" class="input-group-text">
        <slot></slot>
    </component>
</template>