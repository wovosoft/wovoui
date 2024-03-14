<script lang="ts" setup>
import {getBinaryClasses,} from "@/composables";
import {PlaceholderProps} from "@/index";

const props = withDefaults(defineProps<PlaceholderProps>(), {
    tag: 'div'
});
</script>

<template>
    <component :is="tag" :class="[
                'placeholder',
                getBinaryClasses({
                    placeholderGlow: glow,
                    placeholderWave: props.wave,
                    placeholderAnimation: props.animation,
                    placeholderSize: props.size,
                    bg: props.variant,
                    col: props.col,
                })
            ]">
        <slot></slot>
    </component>
</template>