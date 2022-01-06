<template>
    <template v-if="to">
        <router-link :to="to" :class="classes" v-bind="linkAttributes">
            <slot></slot>
        </router-link>
    </template>
    <component v-else :is="tag" :class="classes" v-bind="linkAttributes">
        <slot></slot>
    </component>
</template>

<script>
import {make, makeBoolean, makeString} from "./shared/properties.js";
import {computed} from "vue";

export default {
    name: "NavLink",
    props: {
        ariaCurrent: makeString(null),
        active: makeBoolean(false),
        disabled: makeBoolean(false),
        href: makeString(null),
        target: makeString("_self"),
        tag: makeString("a"),
        to: make(Object, null)
    },
    setup(props) {
        const classes = computed(() => {
            return [
                "nav-link",
                {
                    active: props.active,
                    disabled: props.disabled,
                }
            ];
        });
        const linkAttributes = computed(() => {
            return {
                href: props.tag === "a" ? props.href : null,
                ariaCurrent: props.ariaCurrent,
                target: (props.target === "a" || props.href) ? props.target : null
            }
        })
        return {
            classes,
            linkAttributes
        }
    }
}
</script>