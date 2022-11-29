import {defineComponent, h} from "vue";
import {makeBoolean, makeTag, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "ModalFooter",
    props: {
        tag: makeTag("div"),
        variant: makeVariant(null),
        shrink: makeBoolean(false)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-footer", {
                ["text-bg-" + props.variant]: props.variant,
                "py-1": props.shrink
            }]
        }, slots.default?.());
    }
})