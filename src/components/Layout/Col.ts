import {isBoolean} from "../../shared/properties.js";
import {defineComponent, h, PropType} from "vue";
import type {
    colAlignments,
    colOrders,
    ColSizes,
    justifyContentAlignments,
    responsiveNumbers
} from "../../types";


export default defineComponent({
    name: "Col",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        col: {type: [String, Number] as PropType<string | ColSizes>, default: null},
        sm: {type: [String, Number, Boolean] as PropType<string | ColSizes>, default: null},
        md: {type: [String, Number, Boolean] as PropType<string | ColSizes>, default: null},
        lg: {type: [String, Number, Boolean] as PropType<string | ColSizes>, default: null},
        xl: {type: [String, Number, Boolean] as PropType<string | ColSizes>, default: null},
        alignSelf: {type: String as PropType<colAlignments>, default: null},
        justifyContent: {
            type: String as PropType<justifyContentAlignments>,
            default: null
        },
        order: {type: [Number, String] as PropType<colOrders>, default: null},
        offsetSm: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
        offsetMd: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
        offsetLg: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
        offsetXl: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
        //gutters
        gx: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
        gy: {type: [Number, String] as PropType<0 | responsiveNumbers>, default: null},
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

