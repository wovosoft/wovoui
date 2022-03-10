<template>
    <component :is="tag" :class="classes" v-bind="attributes">
        <template v-if="href">
            <a :href="href">
                <slot></slot>
            </a>
        </template>
        <template v-else-if="isRouterInstalled && to">
            <router-link :to="to">
                <slot></slot>
            </router-link>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "BreadcrumbItem",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
        active: {type: Boolean as PropType<boolean>, default: false},
        activeClass: {type: String as PropType<string>, default: "active"},
        append: {type: Boolean as PropType<boolean>, default: false},
        ariaCurrent: {type: String as PropType<string>, default: "location"},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        exact: {type: Boolean as PropType<boolean>, default: false},
        rel: {type: String as PropType<string>, default: null},
        replace: {type: Boolean as PropType<boolean>, default: false},
        target: {type: String as PropType<string>, default: "_self"},
        to: {type: [Object, String] as PropType<object | string>, default: null},
        href: {type: String as PropType<string>, default: null}
    },
    setup(props, context) {
        const attributes = computed(() => {
            return {
                ariaCurrent: props.ariaCurrent
            }
        });
        return {
            attributes,
            classes: computed(() => [
                "breadcrumb-item",
                {
                    "active": props.active
                }
            ]),
            isRouterInstalled: computed(() => !!context.$router)
        }
    }
})
</script>