<template>
    <teleport v-if="to" :to="to">
        <slot/>
    </teleport>
    <slot v-else/>
</template>

<script lang="ts" setup>
import {PropType} from "vue";

const props = defineProps({
    to: {
        type: String as PropType<keyof HTMLElementTagNameMap>,
        default: null
    }
});
</script>
