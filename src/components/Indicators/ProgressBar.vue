<script lang="ts" setup>
import {ProgressBarProps} from "@/components";

withDefaults(defineProps<ProgressBarProps>(), {
    tag: 'div',
    value: 0,
    min: 0,
    max: 100,
    showValue: true,
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