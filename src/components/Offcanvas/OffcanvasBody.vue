<script lang="ts" setup>
withDefaults(defineProps<{ tag?: keyof HTMLElementTagNameMap }>(), {
    tag: "div"
})
</script>

<template>
    <component :is="tag" class="offcanvas-body">
        <slot/>
    </component>
</template>