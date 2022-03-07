import {defineComponent, PropType, h} from "vue";
import type {responsiveNumbers} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "FormLabel",
    props: {
        horizontal: {type: Boolean as PropType<boolean>, default: false},
        sm: {type: Number as PropType<responsiveNumbers>, default: null},
        md: {type: Number as PropType<responsiveNumbers>, default: null},
        lg: {type: Number as PropType<responsiveNumbers>, default: null},
        xl: {type: Number as PropType<responsiveNumbers>, default: null},
    },
    setup(props, {slots}) {
        return () => h("label", {
            class: {
                "form-label": !props.horizontal,
                "col-form-label": props.horizontal,
                ["col-sm-" + props.sm]: props.horizontal && props.sm,
                ["col-md-" + props.md]: props.horizontal && props.md,
                ["col-lg-" + props.lg]: props.horizontal && props.lg,
                ["col-xl-" + props.xl]: props.horizontal && props.xl,
            }
        }, slots.default ? slots.default() : null)
    }
})