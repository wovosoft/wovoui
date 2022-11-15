<template>
    <component :is="tag" :class="{[type + '-feedback']: type}">
        <slot>
            {{ message }}
        </slot>
    </component>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import type {FeedbackTypes} from "../../types";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
    type: {type: String as PropType<FeedbackTypes>, default: 'valid'},
    message: {type: String as PropType<string>, default: null},
});
</script>