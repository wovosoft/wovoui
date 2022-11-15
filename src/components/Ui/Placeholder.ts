import {defineComponent, h, PropType} from "vue";
import type {responsiveNumbers, ColorVariants} from "../../types";

export default defineComponent({
    name: "Placeholder",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        glow: {type: Boolean as PropType<boolean>, default: false},
        wave: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<'lg' | 'sm' | 'xs'>, default: null},
        col: {type: [Number, String] as PropType<responsiveNumbers>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["placeholder", {
                "placeholder-glow": props.glow,
                "placeholder-wave": props.wave,
                ["bg-" + props.variant]: props.variant
            }]
        }, slots.default?.())
    }
})