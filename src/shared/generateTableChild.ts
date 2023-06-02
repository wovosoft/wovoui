import {h, Slots} from "vue";

export default function (tag: keyof HTMLElementTagNameMap, props: any, slots: Slots) {
    return h(tag, {
        class: {
            ["table-" + props.variant]: props.variant,
            "table-active": props.active,
            ["align-" + props.align]: !!props.align
        }
    }, slots.default?.());
}