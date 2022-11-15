import {defineComponent, h} from "vue";

export default defineComponent({
    name: "ToastBody",
    setup(props, {slots}) {
        return () => h("div", {
            class: ["toast-body"]
        }, slots.default?.())
    }
})