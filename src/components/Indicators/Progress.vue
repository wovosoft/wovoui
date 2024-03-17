<script lang='ts' setup>
import {ProgressBar, ProgressProps} from '@/components';

withDefaults(defineProps<ProgressProps>(), {
    tag: 'div',
    barTag: 'div',
    value: 0,
    min: 0,
    max: 100,
    showValue: true
});
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