import {defineComponent, h, PropType} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "TFoot",
    props: {
        variant: {type: String as PropType<ColorVariants>, default: null},
        active: {type: Boolean as PropType<boolean>, default: false},
        align: {type: String as PropType<string>, default: null}
    },
    setup(props, {slots}) {
        return () => h("tfoot", {
            class: [
                {
                    ["table-" + props.variant]: props.variant,
                    "table-active": props.active,
                    ["align-" + props.align]: !!props.align
                }
            ]
        }, slots.default?.())
    }
})