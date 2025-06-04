<script lang='ts' setup>
import {ProgressBar} from '@/components';
import type {ProgressProps, ProgressSlots} from './types';

const props = withDefaults(defineProps<ProgressProps>(), {
    tag: 'div',
    barTag: 'div',
    value: 0,
    min: 0,
    max: 100,
    showValue: true
});

// Define component options for better IDE support
defineOptions({
  name: 'Progress',
  inheritAttrs: false
});

defineSlots<ProgressSlots>();
</script>

<template>
    <component :is='tag' class='progress' :style="{height: typeof height === 'number' ? height + 'px' : height}">
        <slot>
            <ProgressBar
                v-bind="{
                    tag: barTag,
                    value: value,
                    min: min,
                    max: max,
                    showValue: showValue,
                    variant: variant,
                    striped: striped,
                    animated: animated
                }"
            />
        </slot>
    </component>
</template>