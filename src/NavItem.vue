<template>
    <component :is="tag" :class="classes" v-bind="attributes">
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

<script>
import {make, makeBoolean, makeString} from "./shared/properties.js";
import {computed} from "vue";
import NavLink from "./NavLink.vue";

export default {
    name: "NavItem",
    components: {NavLink},
    props: {
        tag: makeString("li"),
        linkTag: makeString("a"),
        ariaCurrent: makeString(null),
        href: makeString("#"),
        to: make(Object, null),
        target: makeString("_self"),
        active: makeBoolean(false),
        disabled: makeBoolean(false),
    },
    setup(props) {
        const classes = computed(() => {
            return [
                "nav-item"
            ]
        });
        const attributes = computed(() => {
            return {}
        });
        return {
            classes,
            attributes
        }
    }
}
</script>