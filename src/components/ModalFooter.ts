import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "ModalFooter",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {class: "modal-footer"}, slots.default ? slots.default() : null)
    }
})