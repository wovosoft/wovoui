import {defineComponent, h, PropType} from "vue";
import type {ColorVariants} from "../../types";

export default defineComponent({
    name: "ModalHeader",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        variant: {
            type: String as PropType<ColorVariants>
        },
        shrink: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-header", {
                ["text-bg-" + props.variant]: props.variant,
                "py-2": props.shrink
            }]
        }, slots.default?.())
    }
})