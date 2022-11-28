import {defineComponent, h, PropType} from "vue";
import type {ColorVariants} from "../../types";


export default defineComponent({
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        value: {type: Number as PropType<number>, default: 0},
        min: {type: Number as PropType<number>, default: 0},
        max: {type: Number as PropType<number>, default: 100},
        showValue: {type: Boolean as PropType<boolean>, default: true},
        striped: {type: Boolean as PropType<boolean>, default: false},
        animated: {type: Boolean as PropType<boolean>, default: false},
        variant: {type: String as PropType<ColorVariants>}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            role: "progressbar",
            style: {width: props.value + '%'},
            ariaValuenow: props.value,
            ariaValuemax: props.max,
            ariaValuemin: props.min,
            class: [
                "progress-bar", {
                    ["bg-" + props.variant]: props.variant,
                    "progress-bar-striped": props.striped,
                    "progress-bar-animated": props.animated,
                }
            ]
        }, slots?.default?.() || props.value + "%")
    }
});