<template>
    <Nav v-bind="$props" class="navbar-nav">
        <slot></slot>
    </Nav>
</template>

<script>
import Nav from "./Nav.vue";
import navProps from "../shared/navProps.js";

export default {
    name: "NavbarNav",
    components: {Nav},
    props: navProps
}
</script>
