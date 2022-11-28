import {defineComponent, h, PropType} from "vue";

export default defineComponent({
    emits: {
        "update:modelValue": (value: number) => true
    },
    props: {
        min: {type: Number as PropType<number>, default: null},
        max: {type: Number as PropType<number>, default: null},
        step: {type: Number as PropType<number>, default: 1},
        modelValue: {type: Number as PropType<number>, default: 0}
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