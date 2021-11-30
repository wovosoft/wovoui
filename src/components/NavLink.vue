<template>
    <a :class="classes" v-bind="linkAttributes">
        <slot></slot>
    </a>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed} from "vue";

export default {
    name: "NavLink",
    props: {
        ariaCurrent: makeString(null),
        active: makeBoolean(false),
        disabled: makeBoolean(false),
        href: makeString("#"),
        target: makeString("_self")
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
                href: !props.disabled ? props.href : null,
                ariaCurrent: props.ariaCurrent,
                target: props.target
            }
        })
        return {
            classes,
            linkAttributes
        }
    }
}
</script>