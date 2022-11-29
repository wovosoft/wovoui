<template>
    <Nav navs
         :style="{'--bs-scroll-height':(typeof scrollHeight==='number'?scrollHeight+'px':scrollHeight)}">
        <slot></slot>
    </Nav>
</template>

<script lang="ts" setup>
import Nav from "./Nav";
import navProps from "../../shared/navProps";
import {computed, PropType} from "vue";
import {makeBoolean} from "../../composables/useProps";

const props = defineProps({
    ...navProps,
    scrollHeight: {type: [String, Number] as PropType<string | number>, default: null},
    scrollable: makeBoolean(false)
});

const classes = computed(() => [
    {
        "navbar-nav-scroll": props.scrollHeight || props.scrollable
    }
]);
</script>
