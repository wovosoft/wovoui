<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import navProps from "../shared/navProps.js";

export default defineComponent({
    name: "Nav",
    props: navProps,
    setup(props) {
        const classes = computed(() => {
            return [
                {
                    "nav": !props.navs,
                    "navbar-nav": props.navs,
                    "small": props.small,
                    "nav-tabs": props.tabs,
                    "nav-pills": props.pills,
                    "nav-fill": props.fill,
                    "nav-justified": props.justified,
                    "flex-column": props.vertical,
                    "justify-content-center": props.align === "center",
                    "justify-content-end": props.align === "right" || props.align === "end",
                    "justify-content-start": props.align === "left" || props.align === "start"
                }
            ];
        });

        return {
            classes
        }
    }
})
</script>