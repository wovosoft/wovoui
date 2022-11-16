import {reactive, defineComponent, h} from "vue";
import type {BadgePositions} from "../../types";
import {
    makeBoolean, makeProp, makeString, makeTag, makeVariant
} from "../../composables/useProps";

/**
 * @link https://getbootstrap.com/docs/5.2/components/badge/
 */
export default defineComponent({
    props: {
        /**
         * Wrapper Tag
         * @default span
         */
        tag: makeTag('span'),

        /**
         * Color Variants
         * Uses Bootstrap supported text-bg-*variant classes
         * @link https://getbootstrap.com/docs/5.2/components/badge/#background-colors
         */
        variant: makeVariant(null),

        /**
         * Text Color Variants
         * Uses Bootstrap supported text-*variant classes
         * @link https://getbootstrap.com/docs/5.2/utilities/colors/#how-it-works
         */
        textVariant: makeVariant(null),

        /**
         * Background Color Variants
         * Uses Bootstrap Supported bg-*variant classes
         * @link https://getbootstrap.com/docs/5.2/utilities/background/
         */
        bgVariant: makeVariant(null),

        /**
         * Generates Pill Badges
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/badge/#pill-badges
         */
        pill: makeBoolean(false),

        /**
         * When provided, the badge will be an anchor link
         */
        href: makeString(),

        /**
         * Sets position of the badge wrt. its parent,
         * parent element should have positioned relative
         * @supported 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
         * @link https://getbootstrap.com/docs/5.2/components/badge/#positioned
         */
        position: makeProp<BadgePositions>(null, String),

        /**
         * Default content for default slot
         */
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

            /**
             * Added in BS 5.2.0
             * @link https://getbootstrap.com/docs/5.2/components/badge/#background-colors
             */
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