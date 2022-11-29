<template>
    <component :is="tag" class="tab-content">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import {makeTag} from "../../composables/useProps";

defineProps({
    /**
     * @description Element Tag Name
     * @type String
     * @default div
     */
    tag: makeTag("div")
});
</script>
