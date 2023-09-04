import {defineComponent, h, PropType} from "vue";
import {makeBoolean, makeTag} from "@/composables";

export default defineComponent({
    name: "Stack",
    props: {
        tag: makeTag("div"),
        vertical: makeBoolean(false),
        gap: {type: [Number, String] as PropType<number | string>, default: 0}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {
                "vstack": props.vertical,
                "hstack": !props.vertical,
                ["gap-" + props.gap]: props.gap
            }
        }, slots?.default?.())
    }
})