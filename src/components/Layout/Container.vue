<script lang="ts" setup>
import type {ContainerProps} from "./index";

withDefaults(defineProps<ContainerProps>(), {
    tag: 'div'
});
</script>
<template>
    <component
        :is="tag"
        :class="{
            'container': !(fluid || size),
            'container-fluid': fluid && !size,
            ['container-' + size]: size && !fluid
        }">
        <slot></slot>
    </component>
</template>