import {defineComponent, PropType, h} from "vue";
import type {responsiveSizes} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "Container",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        fluid: {type: Boolean as PropType<boolean>, default: false},
        size: {type: String as PropType<responsiveSizes>, default: null}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: {
                "container": !(props.fluid || props.size),
                "container-fluid": props.fluid && !props.size,
                ["container-" + props.size]: props.size && !props.fluid
            }
        }, slots.default ? slots.default() : null)
    }
});
