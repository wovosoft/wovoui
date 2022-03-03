<template>
    <component :class="classes" :is="tag">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from "vue";
import type {
    colAlignments,
    ColSizes,
    justifyContentAlignments,
    responsiveNumbers
} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "Row",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        cols: {type: [String, Number] as PropType<responsiveNumbers>, default: null},
        sm: {type: [Number, Boolean] as PropType<number | boolean>, default: null},
        md: {type: [Number, Boolean] as PropType<number | boolean>, default: null},
        lg: {type: [Number, Boolean] as PropType<number | boolean>, default: null},
        xl: {type: [Number, Boolean] as PropType<number | boolean>, default: null},
        alignItems: {type: String as PropType<colAlignments>, default: null},
        justifyContent: {type: String as PropType<justifyContentAlignments>, default: null},
        //gutter
        g: {type: [Number, String] as PropType<ColSizes>, default: null},
        gSm: {type: [Number, String] as PropType<ColSizes>, default: null},
        gMd: {type: [Number, String] as PropType<ColSizes>, default: null},
        gLg: {type: [Number, String] as PropType<ColSizes>, default: null},
        gXl: {type: [Number, String] as PropType<ColSizes>, default: null},
    },
    setup(props) {
        return {
            classes: computed(() => ([
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
            ]))
        }
    }
})
</script>
