<template>
    <component :class="classes" :is="tag">
        <slot></slot>
    </component>
</template>

<script>
import {make, makeString} from "../shared/properties.js";
import {reactive} from "vue";

export default {
    name: "Row",
    props: {
        tag: makeString("div"),
        cols: make([String, Number], null),
        sm: make([Number, Boolean], null),
        md: make([Number, Boolean], null),
        lg: make([Number, Boolean], null),
        xl: make([Number, Boolean], null),
        alignItems: makeString(),
        justifyContent: makeString(),
        //gutter
        g: make([Number, String], null),
        gSm: make([Number, String], null),
        gMd: make([Number, String], null),
        gLg: make([Number, String], null),
        gXl: make([Number, String], null),
    },
    setup(props) {
        const classes = reactive([
            "row",
            {
                ["row-cols-" + props.cols]: props.cols,
                ["row-cols-sm-" + props.sm]: props.sm,
                ["row-cols-md-" + props.md]: props.md,
                ["row-cols-lg-" + props.lg]: props.lg,
                ["row-cols-xl-" + props.xl]: props.xl,
                ["align-items-" + props.alignItems]: props.alignItems,
                ["justify-content-" + props.justifyContent]: props.justifyContent,
                ["g-" + props.g]: props.g,
                ["g-sm-" + props.gSm]: props.gSm,
                ["g-md-" + props.gMd]: props.gMd,
                ["g-lg-" + props.gLg]: props.gLg,
                ["g-xl-" + props.gXl]: props.gXl,
            }
        ]);
        return {
            classes
        }
    }
}
</script>
