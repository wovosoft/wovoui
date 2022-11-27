<template>
    <component :is="wrapper" role="presentation">
        <component :is="tag" class="dropdown-header">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

defineProps({
    wrapper: {type: String as PropType<string>, default: "li"},
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h6"},
})
</script>