import {defineComponent, h} from "vue";
import type {ResponsiveNumbers} from "../../types";
import {makeBoolean, makeProp} from "../../composables/useProps";

export default defineComponent({
    name: "FormLabel",
    props: {
        horizontal: makeBoolean(false),
        sm: makeProp<ResponsiveNumbers>(null, Number),
        md: makeProp<ResponsiveNumbers>(null, Number),
        lg: makeProp<ResponsiveNumbers>(null, Number),
        xl: makeProp<ResponsiveNumbers>(null, Number),
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
        }, slots?.default?.());
    }
})