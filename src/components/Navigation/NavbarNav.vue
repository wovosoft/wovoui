<template>
    <Nav navs
         :class="{'navbar-nav-scroll': scrollHeight || scrollable}"
         :style="{'--bs-scroll-height':(typeof scrollHeight==='number'?scrollHeight+'px':scrollHeight)}">
        <slot></slot>
    </Nav>
</template>

<script lang="ts" setup>
import Nav from "./Nav.vue";
import {NavbarNavProps} from "@/components";

withDefaults(defineProps<NavbarNavProps>(), {
    tag: 'ul',
});
</script>
