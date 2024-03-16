<template>
    <component :is="tag" class="tab-content">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import {HasTag} from "@/components";

withDefaults(defineProps<HasTag>(), {
    tag: 'div'
});
</script>
