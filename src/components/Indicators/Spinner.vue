<template>
    <div :class="classes" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {ColorVariants, ButtonSizes} from "../../types";

const props = defineProps({
    grow: {type: Boolean as PropType<boolean>, default: false},
    size: {type: String as PropType<ButtonSizes>, default: null},
    variant: {type: String as PropType<ColorVariants>, default: null}
});

const classes = computed(() => [
    "spinner-" + (props.grow ? 'grow' : 'border'),
    {
        ["spinner-" + (props.grow ? 'grow' : 'border') + "-" + props.size]: props.size,
        ["text-" + props.variant]: props.variant
    }
]);
</script>