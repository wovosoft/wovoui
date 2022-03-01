<template>
    <Nav v-bind="$props" navs
         :style="{'--bs-scroll-height':(typeof scrollHeight==='number'?scrollHeight+'px':scrollHeight)}">
        <slot></slot>
    </Nav>
</template>

<script lang="ts">
import Nav from "./Nav.vue";
import navProps from "../shared/navProps.js";
import {computed, defineComponent} from "vue";

export default defineComponent({
    name: "NavbarNav",
    components: {Nav},
    props: {
        ...navProps,
        scrollHeight: {type: [String, Number], default: null},
        scrollableL: {type: Boolean, default: false}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                {
                    "navbar-nav-scroll": props.scrollHeight || props.scrollableL
                }
            ])
        }
    }
})
</script>
