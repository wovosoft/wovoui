<template>
    <component :is="tag" class="nav-item">
        <NavLink
            :tag="linkTag"
            :target="target"
            :href="href"
            :to="to"
            :active="active"
            :disabled="disabled"
            :aria-current="ariaCurrent">
            <slot></slot>
        </NavLink>
    </component>
</template>

<script lang="ts" setup>
import {PropType} from "vue";
import NavLink from "./NavLink.vue";

defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
    linkTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
    ariaCurrent: {type: String as PropType<string>, default: null},
    href: {type: String as PropType<string>, default: "#"},
    to: {type: Object as PropType<object>, default: null},
    target: {type: String as PropType<string>, default: null},
    active: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
});
</script>