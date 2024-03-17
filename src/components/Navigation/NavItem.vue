<template>
    <component :is="tag" class="nav-item">
        <NavLink
            :tag="linkTag"
            :target="target"
            :href="href"
            :to="to as RouteRecordRaw"
            :active="active"
            :disabled="disabled"
            :aria-current="ariaCurrent">
            <slot></slot>
        </NavLink>
    </component>
</template>

<script lang="ts" setup>
import {NavItemProps, NavLink} from "@/components/Navigation";
import {RouteRecordRaw} from "vue-router";

withDefaults(defineProps<NavItemProps>(), {
    tag: 'li',
    linkTag: 'a',
    href: '#',
});
</script>