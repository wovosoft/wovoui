<script lang="ts" setup>
import type {SpinnerProps, SpinnerSlots} from './types';

const props = withDefaults(defineProps<SpinnerProps>(), {
    tag: 'div'
});

// Define component options for better IDE support
defineOptions({
  name: 'Spinner',
  inheritAttrs: false
});

defineSlots<SpinnerSlots>();
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