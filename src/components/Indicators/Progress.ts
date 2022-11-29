import {defineComponent, h, PropType} from "vue";
import {ProgressBar} from "../..";
import {makeBoolean, makeNumber, makeTag, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "Progress",
    props: {
        tag: makeTag("div"),
        barTag: makeTag("div"),
        value: makeNumber(0),
        min: makeNumber(0),
        max: makeNumber(100),
        showValue: makeBoolean(true),
        striped: makeBoolean(false),
        animated: makeBoolean(false),
        height: {type: [String, Number] as PropType<string | number>, default: null},
        variant: makeVariant()
    },
    setup(props, {slots}) {
        const getChildren = () => {
            if (slots.default) {
                return slots.default();
            }
            return h(ProgressBar, {
                tag: props.barTag,
                value: props.value,
                min: props.min,
                max: props.max,
                showValue: props.showValue,
                variant: props.variant,
                striped: props.striped,
                animated: props.animated
            })
        }
        return () => h(props.tag, {
            class: ["progress"],
            style: {height: typeof props.height === "number" ? props.height + "px" : props.height}
        }, getChildren())
    }
})