<template>
    <component
        :is="tag"
        :class="classes"
        role="progressbar"
        :style="{width:value+'%'}"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valuemax="max">
        <slot :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max">
            {{ value + '%' }}
        </slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {ColorVariants} from "../../types";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    value: {type: Number as PropType<number>, default: 0},
    min: {type: Number as PropType<number>, default: 0},
    max: {type: Number as PropType<number>, default: 100},
    showValue: {type: Boolean as PropType<boolean>, default: true},
    striped: {type: Boolean as PropType<boolean>, default: false},
    animated: {type: Boolean as PropType<boolean>, default: false},
    variant: {type: String as PropType<ColorVariants>}
});

const classes = computed(() => [
    "progress-bar", {
        ["bg-" + props.variant]: props.variant,
        "progress-bar-striped": props.striped,
        "progress-bar-animated": props.animated,
    }
]);
</script>