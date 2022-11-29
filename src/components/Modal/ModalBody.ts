import {defineComponent, h} from "vue";
import {makeTag, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "ModalBody",
    props: {
        tag: makeTag("div"),
        variant: makeVariant(null)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-body", {
                ["text-bg-" + props.variant]: props.variant
            }]
        }, slots.default?.())
    }
})