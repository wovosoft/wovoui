import {defineComponent, h} from "vue";
import {makeNumber} from "../../composables/useProps";

export default defineComponent({
    emits: {
        "update:modelValue": (value: number) => true
    },
    props: {
        min: makeNumber(null),
        max: makeNumber(null),
        step: makeNumber(1),
        modelValue: makeNumber(0)
    },
    setup(props, {emit}) {
        return () => h("input", {
            value: props.modelValue,
            min: props.min,
            max: props.max,
            step: props.step,
            type: 'range',
            class: "form-range",
            onInput: e => emit('update:modelValue', Number(e.target.value)),
        })
    }
})