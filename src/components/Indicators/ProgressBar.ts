import {defineComponent, h} from "vue";
import {makeBoolean, makeNumber, makeTag, makeVariant} from "../../composables/useProps";


export default defineComponent({
    props: {
        tag: makeTag("div"),
        value: makeNumber(0),
        min: makeNumber(0),
        max: makeNumber(100),
        showValue: makeBoolean(true),
        striped: makeBoolean(false),
        animated: makeBoolean(false),
        variant: makeVariant()
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            role: "progressbar",
            style: {width: props.value + '%'},
            ariaValuenow: props.value,
            ariaValuemax: props.max,
            ariaValuemin: props.min,
            class: [
                "progress-bar", {
                    ["bg-" + props.variant]: props.variant,
                    "progress-bar-striped": props.striped,
                    "progress-bar-animated": props.animated,
                }
            ]
        }, slots?.default?.() || props.value + "%")
    }
});