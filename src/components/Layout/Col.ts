import {makeProp, makeTag} from "../../composables/useProps";

function isBoolean(compare: unknown) {
    return typeof compare === "boolean";
}

import {defineComponent, h, PropType} from "vue";
import type {
    ColAlignments,
    ColOrders,
    ColSizes,
    JustifyContentAlignments,
    ResponsiveNumbers
} from "../../types";


export default defineComponent({
    name: "Col",
    props: {
        tag: makeTag("div"),
        col: {type: [String, Number] as PropType<string | ColSizes>, default: null},
        sm: makeProp<string | ColSizes>(null, [String, Number, Boolean]),
        md: makeProp<string | ColSizes>(null, [String, Number, Boolean]),
        lg: makeProp<string | ColSizes>(null, [String, Number, Boolean]),
        xl: makeProp<string | ColSizes>(null, [String, Number, Boolean]),
        alignSelf: {type: String as PropType<ColAlignments>, default: null},
        justifyContent: {
            type: String as PropType<JustifyContentAlignments>,
            default: null
        },
        order: {type: [Number, String] as PropType<ColOrders>, default: null},
        offsetSm: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        offsetMd: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        offsetLg: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        offsetXl: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        //gutters
        gx: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        gy: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {
                class: ({
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
                })
            },
            slots.default?.()
        )
    }
})

