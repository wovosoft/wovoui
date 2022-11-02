import {defineComponent, h, PropType} from "vue";
import type {ButtonSizes} from "../types";

export default defineComponent({
    name: 'ButtonGroup',
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        ariaLabel: {type: String as PropType<string>, default: "Button Group"},
        size: {type: String as PropType<ButtonSizes>, default: () => null},
        vertical: {type: Boolean as PropType<boolean>, default: false},
        role: {type: String as PropType<string>, default: "group"}
    },
    setup(props, {slots}) {
        return () => h(
            props.tag,
            {
                class: {
                    "btn-group": !props.vertical,
                    "btn-group-vertical": props.vertical,
                    ["btn-group-" + props.size]: props.size
                },
                role: props.role,
                ariaLabel: props.ariaLabel
            },
            [
                slots.default?.()
            ]
        )
    }
});
/**
 * When `classes` is defined outside render function, it should be computed. if used inside render function,
 * no need to be computed because render function itself is reactive
 */