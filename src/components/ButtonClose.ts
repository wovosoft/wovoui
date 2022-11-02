import {defineComponent, h, PropType} from "vue";
import type {ButtonSizes} from "../types";

export default defineComponent({
    name: "ButtonClose",
    props: {
        size: {type: String as PropType<ButtonSizes>, default: null},
        white: {type: Boolean as PropType<boolean>, default: () => false},
        ariaLabel: {type: String as PropType<string>, default: "Close"},
        disabled: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return () => h(
            "button",
            {
                type: "button",
                disabled: props.disabled,
                ariaLabel: props.ariaLabel,
                class: [
                    "btn-close",
                    {
                        'btn-close-white': props.white,
                        ["btn-" + props.size]: props.size
                    }
                ]
            }
        )
    }
})