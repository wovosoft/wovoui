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
import {computed, getCurrentInstance, PropType} from "vue";
import type {ClassTypes} from "@/types";
import {RouteRecordRaw} from "vue-router";
import {makeBoolean, makeString} from "@/composables";


type linkAttributesType = {
    href?: string,
    ariaCurrent?: string,
    target?: string
}

const props = defineProps({
    ariaCurrent: {type: [String, null] as PropType<string | null>, default: null},
    active: makeBoolean(false),
    disabled: makeBoolean(false),
    href: makeString(),
    target: makeString(),
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
    to: {type: Object as PropType<RouteRecordRaw>, default: null},
});

const isVueRouterInstalled = computed(() => {
    return !!getCurrentInstance().appContext.config.globalProperties.$router;
});

const classes = computed<ClassTypes>(() => ["nav-link", {
    active: props.active
}]);

const linkAttributes = computed<linkAttributesType>(() => ({
    href: props.tag === "a" ? props.href : null,
    ariaCurrent: props.ariaCurrent,
    target: (props.target === "a" || props.href) ? props.target : null
}));
</script>