import {defineComponent, PropType, h} from "vue";
import type {ColorVariants,TextVariants} from "../../types";

export default defineComponent({
    name: "CardSubTitle",
    props: {
        title: {type: String as PropType<string>, default: null},
        tag: {type: String as PropType<string>, default: "h6"},
        textVariant: {type: String as PropType<ColorVariants | TextVariants>, default: "muted"}
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