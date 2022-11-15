import {reactive, defineComponent, h} from "vue";
import type {BadgePositions} from "../../types";
import {
    makeBoolean, makeProp, makeString, makeTag, makeVariant
} from "../../composables/useProps";

export default defineComponent({
    props: {
        tag: makeTag('span'),
        variant: makeVariant(null),
        textVariant: makeVariant(null),
        bgVariant: makeVariant(null),
        pill: makeBoolean(false),
        href: makeString(),
        position: makeProp<BadgePositions>(null, String),
        content: makeProp<string | number>(null, [String, Number])
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

        const getVariant = () => {
            if (props.bgVariant || props.textVariant) {
                return {
                    ['bg-' + props.bgVariant]: !!props.bgVariant,
                    ['text-' + props.textVariant]: !!props.textVariant,
                }
            }

            //added in 5.2
            return {
                ['text-bg-' + props.variant]: !!props.variant
            }
        }
        return () => h(
            props.href ? 'a' : props.tag,
            {
                ...attributes,
                class: [
                    "badge",
                    getVariant(),
                    {
                        "rounded-pill": props.pill,
                        "text-decoration-none": props.href,
                        "position-absolute translate-middle": props.position,
                        "start-100 top-0": props.position === "top-right",
                        "start-0 top-0": props.position === "top-left",
                        "start-0 top-100": props.position === "bottom-left",
                        "start-100 top-100": props.position === "bottom-right",
                    }
                ]
            },
            slots.default?.() ?? props.content
        )
    }
});