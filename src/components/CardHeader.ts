import {defineComponent, h, PropType} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "CardHeader",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        content: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null},
        borderVariant: {type: String as PropType<ColorVariants>, default: null},
        textVariant: {type: String as PropType<ColorVariants>, default: null}
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {
                class: [
                    "card-header",
                    {
                        ["bg-" + props.variant]: !!props.variant,
                        ["text-" + props.textVariant]: !!props.textVariant,
                        ["border-" + props.borderVariant]: !!props.borderVariant,
                    }
                ]
            },
            slots.default?.()
        )
    }
})