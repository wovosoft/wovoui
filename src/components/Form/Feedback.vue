<script lang="ts" setup>
import type {FeedbackProps} from "@/index";

withDefaults(defineProps<FeedbackProps>(), {
    tag: 'div',
    type: 'valid',
});
</script>

<template>
    <component :is="tag" :class="{[type + '-feedback']: type}">
        <slot>{{ message }}</slot>
    </component>
</template>