<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {modalSizes, modalFullScreen} from "../../types";

const props = defineProps({
    scrollable: {type: Boolean as PropType<boolean>, default: false},
    centered: {type: Boolean as PropType<boolean>, default: false},
    size: {type: String as PropType<modalSizes>, default: null},
    fullscreen: {type: [Boolean, String] as PropType<modalFullScreen>, default: false}
});

const classes = computed(() => ["modal-dialog", {
    ["modal-" + props.size]: props.size,
    ["modal-fullscreen" + (typeof props.fullscreen === 'string' ? ("-" + props.fullscreen) : "")]: !!props.fullscreen,
    "modal-dialog-scrollable": props.scrollable,
    "modal-dialog-centered": props.centered
}]);
</script>
