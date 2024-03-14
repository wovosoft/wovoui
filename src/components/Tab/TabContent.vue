<template>
    <component :is="tag" class="tab-content">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ tag?: keyof HTMLElementTagNameMap }>(), {
    tag: 'div'
});
</script>
