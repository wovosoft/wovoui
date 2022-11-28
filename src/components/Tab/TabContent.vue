<template>
    <component :is="tag" class="tab-content">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

defineProps({
    /**
     * @description Element Tag Name
     * @type String
     * @default div
     */
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
});
</script>
