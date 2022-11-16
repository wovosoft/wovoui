<template>
    <component :is="tag" class="toast-body">
        <slot/>
    </component>
</template>
<script lang="ts" setup>
import {PropType} from "vue";

defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
});

</script>