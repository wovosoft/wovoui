import {defineComponent, PropType, h} from "vue";

export default defineComponent({
    name: "GridCol",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        col: {type: [Number, String] as PropType<string | number>, default: null},
        sm: {type: [Number, String] as PropType<string | number>, default: null},
        md: {type: [Number, String] as PropType<string | number>, default: null},
        lg: {type: [Number, String] as PropType<string | number>, default: null},
        xl: {type: [Number, String] as PropType<string | number>, default: null},
        start: {type: [Number, String] as PropType<string | number>, default: null},
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