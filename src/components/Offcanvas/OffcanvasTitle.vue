<script lang="ts" setup>
withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap
}>(), {
    tag: "h5"
})
</script>

<template>
    <component :is="tag" class="offcanvas-title">
        <slot></slot>
    </component>
</template>