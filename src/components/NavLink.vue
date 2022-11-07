<template>
    <template v-if="isVueRouterInstalled && to">
        <component is="router-link" :to="to" :class="classes" v-bind="linkAttributes">
            <slot></slot>
        </component>
    </template>
    <component v-else :is="tag" :class="classes" v-bind="linkAttributes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance} from "vue";
import type {classTypes} from "../types/classTypes";
import {RouteRecordRaw} from "vue-router";


type linkAttributesType = {
    href?: string,
    ariaCurrent?: string,
    target?: string
}

interface NavLinkProps {
    ariaCurrent?: string | null;
    active?: boolean;
    disabled?: boolean;
    href?: string | null;
    target?: string | null;
    tag?: keyof HTMLElementTagNameMap;
    to?: RouteRecordRaw;
}


const props = withDefaults(defineProps<NavLinkProps>(), {
    ariaCurrent: null,
    active: false,
    disabled: false,
    href: null,
    target: null,
    tag: "a",
    to: null
});

const isVueRouterInstalled = computed(() => {
    return !!getCurrentInstance().appContext.config.globalProperties.$router;
});

const classes = computed<classTypes>(() => ["nav-link", {
    active: props.active
}]);

const linkAttributes = computed<linkAttributesType>(() => ({
    href: props.tag === "a" ? props.href : null,
    ariaCurrent: props.ariaCurrent,
    target: (props.target === "a" || props.href) ? props.target : null
}));
</script>