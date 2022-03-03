<template>
    <Nav v-bind="$props" navs
         :style="{'--bs-scroll-height':(typeof scrollHeight==='number'?scrollHeight+'px':scrollHeight)}">
        <slot></slot>
    </Nav>
</template>

<script lang="ts">
import Nav from "./Nav.vue";
import navProps from "../shared/navProps";
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "NavbarNav",
    components: {Nav},
    props: {
        ...navProps,
        scrollHeight: {type: [String, Number] as PropType<string | number>, default: null},
        scrollableL: {type: Boolean as PropType<boolean>, default: false}
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
