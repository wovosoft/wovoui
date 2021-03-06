import {defineComponent, h, PropType} from "vue";
import type {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    name: "Textarea",
    emits: ["update:modelValue"],
    props: {
        size: {type: String as PropType<buttonSizes>, default: null},
        modelValue: {type: String as PropType<string>, default: null}
    },
    setup(props, {emit}) {
        return () => h("textarea", {
            onInput: (e) => emit('update:modelValue', e.target.value),
            value: props.modelValue,
            class: ["form-control", {
                ["form-control-" + props.size]: !!props.size
            }]
        })
    }
})