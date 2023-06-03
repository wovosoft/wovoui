import {defineComponent, h} from "vue";
import {makeTag} from "@/composables";

export default defineComponent({
    name: "ModalTitle",
    props: {
        tag: makeTag("h5")
    },
    setup(props, {slots}) {
        return () => h(props.tag, {class: "modal-title"}, slots.default?.())
    }
})