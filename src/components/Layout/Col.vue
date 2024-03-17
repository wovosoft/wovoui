<script lang="ts" setup>
import {computed} from "vue";
import type {ColProps} from "@/index";

function isBoolean(compare: unknown) {
    return typeof compare === "boolean";
}

const props = withDefaults(defineProps<ColProps>(), {
    tag: 'div',
})

const attrs = computed(() => ({
    class: {
        "col": !(props.sm || props.md || props.lg || props.xl || props.col),
        ["col-" + props.col]: props.col,
        ["col-sm-" + props.sm]: props.sm && !isBoolean(props.sm),
        ["col-md-" + props.md]: props.md && !isBoolean(props.md),
        ["col-lg-" + props.lg]: props.lg && !isBoolean(props.lg),
        ["col-xl-" + props.xl]: props.xl && !isBoolean(props.xl),
        "col-sm": props.sm && isBoolean(props.sm),
        "col-md": props.md && isBoolean(props.md),
        "col-lg": props.lg && isBoolean(props.lg),
        "col-xl": props.xl && isBoolean(props.xl),
        ["align-self-" + props.alignSelf]: props.alignSelf,
        ["justify-content-" + props.justifyContent]: props.justifyContent,
        ["order-" + props.order]: props.order,
        ["offset-sm-" + props.offsetSm]: props.offsetSm,
        ["offset-md-" + props.offsetMd]: props.offsetMd,
        ["offset-lg-" + props.offsetLg]: props.offsetLg,
        ["offset-xl-" + props.offsetXl]: props.offsetXl,
        ["gx-" + props.gx]: props.gx,
        ["gy-" + props.gy]: props.gy,
    }
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>