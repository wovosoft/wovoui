<template>
    <component :is="tag" :class="classes" v-bind="attributes">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "./shared/properties.js";
import {computed} from "vue";

export default {
    name: "NavbarBrand",
    props: {
        tag: makeString("a"),
        href: makeString("#"),
    },
    setup(props) {
        const classes = computed(() => {
            return [
                "navbar-brand"
            ]
        });
        const attributes = computed(() => {
            return {
                "href": props.tag === 'a' ? props.href : null
            }
        });
        return {
            classes,
            attributes
        }
    }
}
</script>