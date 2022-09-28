import {h} from "vue";

export default function (tag, props, slots) {
    return h(tag, {
        class: {
            ["table-" + props.variant]: props.variant,
            "table-active": props.active,
            ["align-" + props.align]: !!props.align
        }
    }, slots.default?.());
}