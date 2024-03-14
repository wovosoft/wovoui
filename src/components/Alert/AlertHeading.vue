<script lang="ts" setup>
import {AlertHeadingPropsInterface} from "@/components";

withDefaults(defineProps<AlertHeadingPropsInterface>(), {
    tag: "h4"
});
</script>

<template>
    <component :is="tag" class="alert-heading">
        <slot></slot>
    </component>
</template>