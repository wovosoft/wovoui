import {defineComponent, h} from "vue";
import type {ButtonSizes} from "@/index";
import {makeSize, makeString} from "@/composables";

export default defineComponent({
    name: "Textarea",
    emits: ["update:modelValue"],
    props: {
        size: makeSize<ButtonSizes>(null),
        modelValue: makeString()
    },
    setup(props, {emit}) {
        return () => h("textarea", {
            onInput: (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement)?.value),
            value: props.modelValue,
            class: ["form-control", {
                ["form-control-" + props.size]: !!props.size
            }]
        })
    }
})