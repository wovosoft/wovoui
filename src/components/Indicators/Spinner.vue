<script lang="ts" setup>
import type {SpinnerProps} from "@/index";

withDefaults(defineProps<SpinnerProps>(), {
    tag: 'div'
});
</script>

<template>
    <component
        :is="tag"
        role="status"
        :class="[
            'spinner-' + (grow ? 'grow' : 'border'),
            {
                ['spinner-' + (grow ? 'grow' : 'border') + '-' + size]: size,
                ['text-' + variant]: variant
            }
        ]">
        <slot>
            <span class="visually-hidden">Loading...</span>
        </slot>
    </component>
</template>