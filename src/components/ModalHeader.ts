import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "ModalHeader",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {class: "modal-header"}, slots.default())
    }
})