<script lang="ts" setup>
import {NavbarBrandProps} from "@/components";

withDefaults(defineProps<NavbarBrandProps>(), {
    tag: 'a',
    href: '#'
});
</script>
<template>
    <component :is="tag" class="navbar-brand" :href="tag === 'a' ? href : null">
        <slot></slot>
    </component>
</template>