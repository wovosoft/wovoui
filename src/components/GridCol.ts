import {defineComponent, PropType, h} from "vue";

import type {responsiveNumbers} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "GridCol",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        col: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        sm: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        md: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        lg: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        xl: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        start: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {
                ["g-start-" + props.start]: props.start,
                ["g-col-" + props.col]: props.col,
                ["g-col-sm-" + props.sm]: props.sm,
                ["g-col-md-" + props.md]: props.md,
                ["g-col-lg-" + props.lg]: props.lg,
                ["g-col-xl-" + props.xl]: props.xl,
            }
        }, slots.default ? slots.default() : null)
    }
})