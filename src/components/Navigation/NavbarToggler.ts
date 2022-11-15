import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    name: "NavbarToggler",
    emits: ['update:modelValue'],
    props: {
        modelValue: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, {emit, slots}) {
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