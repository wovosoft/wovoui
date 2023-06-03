import {defineComponent, h} from "vue";
import {makeBoolean} from "@/composables";

export default defineComponent({
    name: "NavbarToggler",
    emits: ['update:modelValue'],
    props: {
        modelValue: makeBoolean(false)
    },
    setup(props, {emit}) {
        return () => h("button", {
            class: "navbar-toggler",
            type: "button",
            ariaExpanded: props.modelValue,
            onClick() {
                emit('update:modelValue', !props.modelValue)
            }
        }, h("span", {class: "navbar-toggler-icon"}))
    }
})