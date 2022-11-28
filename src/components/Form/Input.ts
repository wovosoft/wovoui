import {defineComponent, h, PropType} from "vue";
import type {ButtonSizes, HTMLInputTypes} from "../../types";

export default defineComponent({
    emits: ["update:modelValue"],
    props: {
        //some actions vary based on type so considering at as a prop
        type: {type: String as PropType<HTMLInputTypes>, default: "text"},
        size: {type: String as PropType<ButtonSizes>, default: null},
        plain: {type: Boolean as PropType<boolean>, default: false},
        state: {type: Boolean as PropType<boolean>, default: null},
        modelValue: {type: [Number, String] as PropType<number | string>, default: null}
    },
    setup(props, {emit}) {
        return () => h("input", {
            /**
             * Should be set only when value is false
             */
            ariaInvalid: props.state === false ? true : null,
            type: props.type,
            value: props.modelValue,
            class: {
                ["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
                "form-range": props.type === "range",
                "is-valid": props.state === true,
                "is-invalid": props.state === false,
                ["form-control-" + props.size]: !!props.size,
                "form-control-color": props.type === "color"
            },
            onInput: e => emit('update:modelValue', props.type === 'number' ? Number(e.target.value) : e.target.value)
        })
    }
});