import {defineComponent, PropType, h} from "vue";
import type {
    ColAlignments,
    ColSizes,
    JustifyContentAlignments,
    ResponsiveNumbers
} from "../../types";
import {makeProp, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: "Row",
    props: {
        tag: makeTag("div"),
        cols: makeProp<ColSizes>(null, [Number, Boolean]),
        sm: makeProp<ColSizes>(null, [Number, Boolean]),
        md: makeProp<ColSizes>(null, [Number, Boolean]),
        lg: makeProp<ColSizes>(null, [Number, Boolean]),
        xl: makeProp<ColSizes>(null, [Number, Boolean]),
        alignItems: {type: String as PropType<ColAlignments>, default: null},
        justifyContent: {type: String as PropType<JustifyContentAlignments>, default: null},
        //gutter
        g: makeProp<ColSizes>(null, [Number, String]),
        gSm: makeProp<ColSizes>(null, [Number, String]),
        gMd: makeProp<ColSizes>(null, [Number, String]),
        gLg: makeProp<ColSizes>(null, [Number, String]),
        gXl: makeProp<ColSizes>(null, [Number, String]),
        //gutters
        gx: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
        gy: makeProp<0 | ResponsiveNumbers>(null, [Number, String]),
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["row", {
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
                ["gx-" + props.gx]: props.gx,
                ["gy-" + props.gy]: props.gy,
            }]
        }, slots?.default())
    }
})