import {defineComponent, h} from "vue";
import {InputProps} from "@/components/Form/useProps";

export default defineComponent({
    name: 'Input',
    props: InputProps,
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        return () => h('input', {
            ariaInvalid: props.state === false ? true : null,
            type: props.type,
            value: props.modelValue,
            onInput: (e: Event & { target: HTMLInputElement }) => emit('update:modelValue', e.target.value),
            class: {
                ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
                "form-range": props.type === "range",
                "is-valid": props.state === true,
                "is-invalid": props.state === false,
                ["form-control-" + props.size]: !!props.size,
                "form-control-color": props.type === "color"
            }
        })
    }
})

