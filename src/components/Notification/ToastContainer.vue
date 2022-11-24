<template>
    <teleport v-if="container" :to="container">
        <component :is="tag" :class="classes" v-bind="$attrs">
            <slot></slot>
        </component>
    </teleport>
    <component v-else :is="tag" :class="classes" v-bind="$attrs">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {ToastPlacements} from "../../types";


const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    placement: {type: String as PropType<ToastPlacements>, default: null},
    container: {type: String as PropType<string | keyof HTMLElementTagNameMap>, default: null}
});

const classes = computed(() => ([
    "toast-container", {
        "top-0 start-0": props.placement === 'top-left',
        "top-0 start-50 translate-middle-x": props.placement === 'top-center',
        "top-0 end-0": props.placement === 'top-right',
        "top-50 start-0 translate-middle-y": props.placement === 'middle-left',
        "top-50 start-50 translate-middle": props.placement === 'middle-center',
        "top-50 end-0 translate-middle-y": props.placement === 'middle-right',
        "bottom-0 start-0": props.placement === 'bottom-left',
        "bottom-0 start-50 translate-middle-x": props.placement === 'bottom-center',
        "bottom-0 end-0": props.placement === 'bottom-right',
    }
]));
</script>