import {defineComponent, h, PropType} from "vue";
import type {PlaceholderSizes, ResponsiveNumbers} from "@/types";
import {getBinaryClasses, makeBoolean, makeProp, makeTag, makeVariant} from "@/composables";

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
        tag: makeTag("div"),

        /**
         * @description Placeholder Animation
         * @type boolean
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
         */
        glow: makeBoolean(false),

        /**
         * @description Placeholder Animation
         * @type boolean
         * @default false
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
         */
        wave: makeBoolean(false),

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
        col: makeProp<ResponsiveNumbers>(null, [Number, String]),

        /**
         * @description Sets Background Color Variants
         * @type string
         * @default null
         * @link https://getbootstrap.com/docs/5.2/components/placeholders/#color
         */
        variant: makeVariant(null)
    },
    setup(props, {slots}) {
        return () => h(props.tag, {
            class: [
                "placeholder",
                getBinaryClasses({
                    placeholderGlow: props.glow,
                    placeholderWave: props.wave,
                    placeholderAnimation: props.animation,
                    placeholderSize: props.size,
                    bg: props.variant,
                    col: props.col,
                })
            ]
        }, slots.default?.())
    }
})