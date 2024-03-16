<script lang="ts" setup>
import {HasTag} from "@/components";

withDefaults(defineProps<HasTag>(), {
    tag: "div"
});
</script>
<template>
    <component :is="tag" class="carousel-caption">
        <slot></slot>
    </component>
</template>