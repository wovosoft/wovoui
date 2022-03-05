import {defineComponent, h, PropType} from "vue";
import type {responsiveSizes} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "ListGroup",
    props: {
        tag: {type: String as PropType<string>, default: "ul"},
        flush: {type: Boolean as PropType<boolean>, default: false},
        numbered: {type: Boolean as PropType<boolean>, default: false},
        horizontal: {
            type: [Boolean, String] as PropType<boolean | responsiveSizes>,
            default: false
        },
    },
    setup(props, {slots}) {
        return () => h(props.numbered ? "ol" : props.tag, {
            class: [
                "list-group",
                {
                    "list-group-flush": props.flush,
                    "list-group-numbered": props.numbered,
                    ["list-group-horizontal" + (typeof props.horizontal === "string" ? "-" + props.horizontal : "")]: props.horizontal,
                }
            ]
        }, slots.default())
    }
})