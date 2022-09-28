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
import type {classTypes} from "../types/classTypes";


type linkAttributesType = {
    href?: string,
    ariaCurrent?: string,
    target?: string
}

const props = defineProps({
    ariaCurrent: {type: String as PropType<string>, default: null},
    active: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
    href: {type: String as PropType<string>, default: null},
    target: {type: String as PropType<string>, default: null},
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
    to: {type: Object as PropType<object>, default: null}
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