import {defineComponent, h, PropType} from "vue";
import type {responsiveNumbers, ColorVariants, PlaceholderSizes} from "../../types";

/**
 * @description Placeholder Component
 * @link https://getbootstrap.com/docs/5.2/components/placeholders/
 */
export default defineComponent({
    name: "Placeholder",
    props: {
        /**
         * @description Wrapper Tag
         * @type string
         * @default div
         */
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},

        /**
         * @description Placeholder Animation
         * @type boolean
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
         */
        glow: {type: Boolean as PropType<boolean>, default: false},

        /**
         * @description Placeholder Animation
         * @type boolean
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
         */
        wave: {type: Boolean as PropType<boolean>, default: false},

        /**
         * @description Placeholder Animation. Props glow or wave can be used.
         * @type string
         * @supported 'glow'|'wave'
         * @default null
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
         */
        animation: {type: String as PropType<'glow' | 'wave'>, default: null},

        /**
         * @description Defines Placeholder Size
         * @type string
         * @default null
         * @supported 'lg' | 'sm' | 'xs'
         */
        size: {type: String as PropType<PlaceholderSizes>, default: null},

        /**
         * Placeholder width can be set by css utility classes or inline styles
         * e.g. w-75, w-100, width:75% etc
         *
         * @description Sets placeholder width with bootstrap supported responsive layout sizes
         * @default null
         */
        col: {type: [Number, String] as PropType<responsiveNumbers>, default: null},

        /**
         * @description Sets Background Color Variants
         * @type string
         * @default null
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#color
         */
        variant: {type: String as PropType<ColorVariants>, default: null}
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: ["placeholder", {
                "placeholder-glow": props.glow,
                "placeholder-wave": props.wave,
                ["placeholder-" + props.animation]: !!props.animation,
                ["placeholder-" + props.size]: !!props.size,
                ["col-" + props.col]: !!props.col,
                ["bg-" + props.variant]: props.variant
            }]
        }, slots.default?.())
    }
})