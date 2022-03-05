import {computed, reactive, defineComponent, PropType, h} from "vue";
import type {badgePositions} from "../types/badgePositions";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "span"},
        variant: {type: String as PropType<ColorVariants>, default: "secondary"},
        pill: {type: Boolean as PropType<boolean>, default: false},
        href: {type: String as PropType<string>, default: null},
        position: {type: String as PropType<badgePositions>, default: null}
    },
    setup(props, {slots}) {
        const attributes = reactive({
            href: null,
            target: null
        });
        if (props.href) {
            attributes.href = props.href;
            attributes.target = "_self";
        }
        const classes = computed(() => [
            "badge",
            {
                ["bg-" + props.variant]: !!props.variant,
                "rounded-pill": props.pill,
                "text-decoration-none": props.href,
                "position-absolute translate-middle": props.position,
                "start-100 top-0": props.position === "top-right",
                "start-0 top-0": props.position === "top-left",
                "start-0 top-100": props.position === "bottom-left",
                "start-100 top-100": props.position === "bottom-right",
            }
        ]);

        return () => h(
            props.href ? 'a' : props.tag,
            {class: classes.value, ...attributes},
            [slots.default()]
        )
    }
});