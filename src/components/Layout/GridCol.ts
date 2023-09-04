import {defineComponent, h} from "vue";
import {makeTag} from "@/composables";
import {makeResponsiveNumbers} from "@/index";

export default defineComponent({
    name: "GridCol",
    props: {
        tag: makeTag("div"),
        col: makeResponsiveNumbers(),
        sm: makeResponsiveNumbers(),
        md: makeResponsiveNumbers(),
        lg: makeResponsiveNumbers(),
        xl: makeResponsiveNumbers(),
        start: makeResponsiveNumbers(),
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
        }, slots?.default?.())
    }
})