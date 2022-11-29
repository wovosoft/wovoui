import {defineComponent, h} from "vue";
import type {ButtonSizes} from "../../types";
import {makeBoolean, makeSize, makeString, makeTag} from "../../composables/useProps";

export default defineComponent({
    name: 'ButtonGroup',
    props: {
        tag: makeTag("div"),
        ariaLabel: makeString("Button Group"),
        size: makeSize<ButtonSizes>(null),
        vertical: makeBoolean(false),
        role: makeString("group")
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