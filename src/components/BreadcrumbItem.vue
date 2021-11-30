<template>
    <li :class="classes" v-bind="attributes">
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
    </li>
</template>

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {computed} from "vue";

export default {
    name: "BreadcrumbItem",
    props: {
        tag: makeString("li"),
        active: makeBoolean(false),
        activeClass: makeString("active"),
        append: makeBoolean(false),
        ariaCurrent: makeString("location"),
        disabled: makeBoolean(false),
        exact: makeBoolean(false),
        rel: makeString(null),
        replace: makeBoolean(false),
        target: makeString("_self"),
        to: make([Object, String], null),
        href: makeString()
    },
    setup(props, context) {
        const classes = computed(() => {
            return [
                "breadcrumb-item",
                {
                    "active": props.active
                }
            ];
        });
        const attributes = computed(() => {
            return {
                ariaCurrent: props.ariaCurrent
            }
        });
        return {
            classes,
            attributes,
            isRouterInstalled: computed(() => !!context.$router)
        }
    }
}
</script>