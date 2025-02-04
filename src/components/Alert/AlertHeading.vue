<script lang="ts" setup>
import {AlertHeadingProps} from "@/components";

withDefaults(defineProps<AlertHeadingProps>(), {
    tag: "h4"
});
</script>

<template>
    <component :is="tag" class="alert-heading">
        <slot></slot>
    </component>
</template>