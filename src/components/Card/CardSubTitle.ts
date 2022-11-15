import {defineComponent, PropType, h} from "vue";
import type {ColorVariants} from "../../types/colorVariants";
import type {textVariants} from "../../types/textVariants";

export default defineComponent({
    name: "CardSubTitle",
    props: {
        title: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<string>, default: "h6"},
        textVariant: {type: String as PropType<ColorVariants | textVariants>, default: "muted"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: [
                "card-subtitle",
                {
                    ["text-" + props.textVariant]: !!props.textVariant
                }
            ]
        }, slots.default?.())
    }
})