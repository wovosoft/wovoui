import {defineComponent, h} from "vue";
import type {ResponsiveNumbers} from "@/types";
import {makeProp, makeTag} from "@/composables";

export default defineComponent({
    name: "GridCol",
    props: {
        tag: makeTag("div"),
        col: makeProp<ResponsiveNumbers>(null, [Number, String]),
        sm: makeProp<ResponsiveNumbers>(null, [Number, String]),
        md: makeProp<ResponsiveNumbers>(null, [Number, String]),
        lg: makeProp<ResponsiveNumbers>(null, [Number, String]),
        xl: makeProp<ResponsiveNumbers>(null, [Number, String]),
        start: makeProp<ResponsiveNumbers>(null, [Number, String]),
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
        }, slots?.default())
    }
})