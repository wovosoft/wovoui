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
import {NavLink} from "./../..";
import {RouteRecordRaw} from "vue-router";
import {makeBoolean, makeProp, makeString, makeTag} from "@/composables";

defineProps({
    tag: makeTag("li"),
    linkTag: makeTag("a"),
    ariaCurrent: makeString(),
    href: makeString("#"),
    to: makeProp<RouteRecordRaw>(null, Object),
    target: makeString(),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
});
</script>