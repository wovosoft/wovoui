<script lang="ts" setup>
/**
 * Multiple routers should be support
 * e.g. vue-router, inertia router, nuxt router etc
 */
import {LinkProps} from "@/components";

withDefaults(defineProps<LinkProps>(), {
    href: '#',
    target: '_self'
});
</script>

<template>
    <a :href="href" :target="target">
        <slot></slot>
    </a>
</template>