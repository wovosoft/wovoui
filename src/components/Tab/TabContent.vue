<template>
    <component :is="tag" class="tab-content">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import {makeTag} from "@/composables";

defineProps({
    tag: makeTag("div")
});
</script>
