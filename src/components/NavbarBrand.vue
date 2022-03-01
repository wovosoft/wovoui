<template>
    <component :is="tag" :class="classes" v-bind="attributes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties.js";
import {computed, defineComponent} from "vue";

export default defineComponent({
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
})
</script>