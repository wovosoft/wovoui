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

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import NavLink from "./NavLink.vue";

export default defineComponent({
    name: "NavItem",
    components: {NavLink},
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
        linkTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        ariaCurrent: {type: String as PropType<string>, default: null},
        href: {type: String as PropType<string>, default: "#"},
        to: {type: Object as PropType<object>, default: null},
        target: {type: String as PropType<string>, default: "_self"},
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
    },
    setup(props) {
        const classes = computed(() => [
            "nav-item"
        ]);
        const attributes = computed(() => {
            return {}
        });
        return {
            classes,
            attributes
        }
    }
})
</script>