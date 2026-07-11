<script lang="ts" setup>
import type {HasTag} from "@/components";

withDefaults(defineProps<HasTag>(), {
    tag: "div"
})
</script>

<template>
    <component :is="tag" class="offcanvas-body">
        <slot/>
    </component>
</template>