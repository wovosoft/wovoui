import {defineComponent, h} from "vue";
import type {ButtonSizes} from "../../types";
import {makeSize, makeString} from "../../composables/useProps";

export default defineComponent({
    name: "Textarea",
    emits: ["update:modelValue"],
    props: {
        size: makeSize<ButtonSizes>(null),
        modelValue: makeString()
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