<template>
    <component :is="tag" :class="classes">
        <Container :fluid="fluid">
            <template v-if="$slots.brand || brand">
                <NavbarBrand :href="brandUrl">
                    <slot name="brand">
                        {{ brand }}
                    </slot>
                </NavbarBrand>
            </template>
            <NavbarToggler v-if="toggler" :target="toggler"/>
            <slot></slot>
        </Container>
    </component>
</template>

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import Container from "./Container.vue";
import {computed} from "vue";
import NavbarBrand from "./NavbarBrand.vue";
import NavbarToggler from "./NavbarToggler.vue";

export default {
    name: "Navbar",
    components: {NavbarBrand, Container, NavbarToggler},
    props: {
        brand: makeString(),
        brandUrl: makeString("#"),
        toggler: makeString(),
        tag: makeString("nav"),
        type: makeString("light"),
        variant: makeString("light"),
        fluid: makeBoolean(true),
        toggleable: make([Boolean, String], false),
        sticky: makeBoolean(false),
        print: makeBoolean(false),
        fixed: makeString(false)
    },
    setup(props) {
        const classes = computed(() => {
            return [
                "navbar",
                {
                    ["navbar-" + props.type]: !!props.type,
                    ["bg-" + props.variant]: !!props.variant,
                    "navbar-expand": props.toggleable === false,
                    ["navbar-expand-" + props.toggleable]: typeof props.toggleable === "string",
                    ["navbar-fixed-" + props.fixed]: typeof props.fixed === "string",
                    "sticky-top": props.sticky,
                    "d-print": props.print
                }
            ]
        });
        return {
            classes
        }
    }
}
</script>