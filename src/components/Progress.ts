import {defineComponent, h, PropType} from "vue";
import ProgressBar from "./ProgressBar.vue";
import type {ColorVariants} from "../types";

export default defineComponent({
    name: "Progress",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
        barTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
        value: {type: Number as PropType<number>, default: 0},
        min: {type: Number as PropType<number>, default: 0},
        max: {type: Number as PropType<number>, default: 100},
        showValue: {type: Boolean as PropType<boolean>, default: true},
        striped: {type: Boolean as PropType<boolean>, default: false},
        animated: {type: Boolean as PropType<boolean>, default: false},
        height: {type: [String, Number] as PropType<string | number>, default: null},
        variant: {type: String as PropType<ColorVariants>}
    },
    setup(props, {slots}) {
        const getChildren = () => {
            if (slots.default) {
                return slots.default();
            }
            return h(ProgressBar, {
                tag: props.barTag,
                value: props.value,
                min: props.min,
                max: props.max,
                showValue: props.showValue,
                variant: props.variant,
                striped: props.striped,
                animated: props.animated
            })
        }
        return () => h(props.tag, {
            class: ["progress"],
            style: {height: typeof props.height === "number" ? props.height + "px" : props.height}
        }, getChildren())
    }
})