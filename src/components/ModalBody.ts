import {defineComponent, h} from "vue";

export default defineComponent({
    name: "ModalBody",
    setup(props, {slots}) {
        return () => h("div", {class: "modal-body"}, slots.default?.())
    }
})