import {defineComponent, h, PropType} from "vue";
import {makeTag, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "ModalHeader",
    props: {
        tag: makeTag("div"),
        variant: makeVariant(null),
        shrink: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-header", {
                ["text-bg-" + props.variant]: props.variant,
                "py-2": props.shrink
            }]
        }, slots.default?.())
    }
})