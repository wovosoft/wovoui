import {defineComponent, h, PropType} from "vue";
import type {ResponsiveSizes} from "@/index";
import {makeBoolean} from "@/composables";

export default defineComponent({
    name: "ListGroup",
    props: {
        tag: {type: String as PropType<string>, default: "ul"},
        flush: makeBoolean(false),
        numbered: makeBoolean(false),
        horizontal: {
            type: [Boolean, String] as PropType<boolean | ResponsiveSizes>,
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
            }, slots.default?.()
        )
    }
})