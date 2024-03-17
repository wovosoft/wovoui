<script lang="ts" setup>
import {computed} from "vue";
import {NavProps} from "@/components";

const props = withDefaults(defineProps<NavProps>(), {
    tag: 'ul',
});

const classes = computed(() => ({
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
}));
</script>

<template>
    <component :is="tag" :class="classes">
        <slot/>
    </component>
</template>