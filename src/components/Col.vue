<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {isBoolean, make, makeString} from "../shared/properties.js";
import {computed, defineComponent} from "vue";

export default defineComponent({
    name: "Col",
    props: {
        tag: makeString("div"),
        col: make([Number, String], null),
        sm: make([Number, Boolean, String], null),
        md: make([Number, Boolean, String], null),
        lg: make([Number, Boolean, String], null),
        xl: make([Number, Boolean, String], null),
        alignSelf: makeString(),
        order: make([Number, String], null),
        offsetSm: make([Number, String], null),
        offsetMd: make([Number, String], null),
        offsetLg: make([Number, String], null),
        offsetXl: make([Number, String], null),
        //gutters
        gx: make([Number, String], null),
        gy: make([Number, String], null),
    },
    setup(props) {
        return {
            classes: computed(() => ({
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
                ["order-" + props.order]: props.order,
                ["offset-sm-" + props.offsetSm]: props.offsetSm,
                ["offset-md-" + props.offsetMd]: props.offsetMd,
                ["offset-lg-" + props.offsetLg]: props.offsetLg,
                ["offset-xl-" + props.offsetXl]: props.offsetXl,
                ["gx-" + props.gx]: props.gx,
                ["gy-" + props.gy]: props.gy,
            }))
        }
    }
})
</script>
