import {defineComponent, h, PropType} from "vue";
import {ColorVariants} from "../../types";

export default defineComponent({
    name: "ModalBody",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        variant: {
            type: String as PropType<ColorVariants>
        }
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["modal-body", {
                ["text-bg-" + props.variant]: props.variant
            }]
        }, slots.default?.())
    }
})