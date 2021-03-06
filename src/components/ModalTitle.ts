import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "ModalTitle",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h5"}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {class: "modal-title"}, slots.default?.())
    }
})