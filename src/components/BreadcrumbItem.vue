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
import {make, makeString} from "../shared/properties.js";
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "BreadcrumbItem",
    props: {
        tag: makeString("li"),
        active: {type: Boolean as PropType<true | false>, default: () => false},
        activeClass: makeString("active"),
        append: {type: Boolean as PropType<true | false>, default: () => false},
        ariaCurrent: makeString("location"),
        disabled: {type: Boolean as PropType<true | false>, default: () => false},
        exact: {type: Boolean as PropType<true | false>, default: () => false},
        rel: makeString(null),
        replace: {type: Boolean as PropType<true | false>, default: () => false},
        target: makeString("_self"),
        to: make([Object, String], null),
        href: makeString(null)
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