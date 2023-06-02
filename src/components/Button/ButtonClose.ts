import {defineComponent, h} from "vue";
import type {ButtonSizes} from "@/types";
import {makeBoolean, makeSize, makeString} from "@/composables";

export default defineComponent({
    name: "ButtonClose",
    props: {
        size: makeSize<ButtonSizes>(null),
        white: makeBoolean(false),
        ariaLabel: makeString("Close"),
        disabled: makeBoolean(false)
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