<script lang="ts" setup>
import type {ProgressBarProps} from './index';

withDefaults(defineProps<ProgressBarProps>(), {
  tag: 'div',
  value: 0,
  min: 0,
  max: 100,
  showValue: true,
});

// Define component options for better IDE support
defineOptions({
  name: 'ProgressBar',
  inheritAttrs: false
});
</script>

<template>
  <component
      :is="tag"
      class="progress-bar"
      v-bind="{
            role: 'progressbar',
            style: {width: value + '%'},
            ariaValuenow: value,
            ariaValuemax: max,
            ariaValuemin: min,
            class: {
                ['bg-' + variant]: variant,
                'progress-bar-striped': striped,
                'progress-bar-animated': animated,
            }
        }">
    <slot>{{ value }}%</slot>
  </component>
</template>