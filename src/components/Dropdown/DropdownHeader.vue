<template>
    <component :is="wrapper" role="presentation">
        <component :is="tag" class="dropdown-header">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts" setup>
import {makeTag} from "@/composables/useProps";

defineProps({
    wrapper: makeTag("li"),
    tag: makeTag("h6"),
})
</script>