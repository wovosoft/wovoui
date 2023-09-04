import {defineComponent, h, PropType} from "vue";
import type {AlignContent, ItemAlignment, JustifyAlignment, ResponsiveSizes} from "@/index";
import {makeBoolean, makeTag} from "@/composables";
import {join} from "lodash";

export default defineComponent({
    props: {
        /**
         * HTML Tag
         */
        tag: makeTag("div"),

        /**
         * When it is set to false the default d-flex class won't be added.
         * By default, it is true
         */
        pure: makeBoolean(true),

        /**
         * Responsive Flex classes sm|md|lg|xl|xxl
         */
        flex: {
            type: [String, Array] as PropType<boolean | ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },

        /**
         * Responsive Inline Flex classes sm|md|lg|xl|xxl
         */
        inline: {
            type: [Boolean, String, Array] as PropType<boolean | ResponsiveSizes | ResponsiveSizes[]>,
            default: false
        },

        /**
         * Horizontal (Row) directions
         * ltr = Left to Right
         * rtl = Right to Bottom
         */
        hDir: {type: String as PropType<'ltr' | 'rtl'>, default: null},

        /**
         * (Column) directions
         * ttb = Top to Bottom
         * btt = Bottom to Top
         */
        vDir: {type: String as PropType<'ttb' | 'btt'>, default: null},

        /**
         * Justify Content Alignment
         */
        jc: {type: String as PropType<JustifyAlignment>, default: null},

        /**
         * Responsive variations of Justified Content
         * @link https://getbootstrap.com/docs/5.2/utilities/flex/
         */
        jcOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        /**
         * Align Items
         */
        ai: {
            type: String as PropType<ItemAlignment>,
            default: null
        },
        aiOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },

        /**
         * Align Self
         */
        as: {
            type: String as PropType<ItemAlignment>,
            default: null
        },
        asOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        wrap: {
            type: [Boolean, String] as PropType<boolean | 'reverse'>,
            default: false
        },
        wrapOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        nowrap: {
            type: [Boolean, String] as PropType<boolean | 'reverse'>,
            default: false
        },
        nowrapOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        /**
         * Align Content
         */
        ac: {type: String as PropType<AlignContent>, default: null},
        acOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
    },
    setup(props, {slots}) {
        function getFlexClasses(type: 'flex' | 'inline') {
            if (!props[type] || !['flex', 'inline'].includes(type)) {
                return [];
            }

            if (type === 'inline' && props.inline === true) {
                return ["d-inline-flex"];
            }

            const flexType = type === 'inline' ? type : null;
            const flexValues = type === 'flex' ? props.flex : props.inline;

            if (Array.isArray(flexValues)) {
                return flexValues.map((screen: ResponsiveSizes) => join(['d', screen, flexType, 'flex'], '-'))
            }

            if (typeof props[type] === 'string' && props[type]) {
                return [
                    join(['d', flexType, 'flex'], '-')
                ];
            }
        }


        function responsiveClasses(resOn: ResponsiveSizes | ResponsiveSizes[], res: JustifyAlignment | ItemAlignment, resFor: string) {
            //Note: When props.jcOn exists props.jc must be provided
            if (typeof resOn === "string" && res) {
                return [resFor, resOn, res].join("-");
            }
            if (Array.isArray(resOn) && res) {
                return resOn.map((dir: ResponsiveSizes) => [resFor, dir, res].join("-"));
            }

            return [];
        }


        function getWrapClasses(type: 'wrap' | 'nowrap'): string[] {
            if (!props[type] || !['wrap', 'nowrap'].includes(type)) {
                return [];
            }

            const reverse = props[type] === 'reverse' ? 'reverse' : null;

            const targetArray = type === 'wrap' ? props.wrapOn : props.nowrapOn;

            if (Array.isArray(targetArray) && targetArray.length > 0) {
                return targetArray.map(on => [type, on, reverse].filter(i => i).join("-"));
            }

            return [type + (reverse ? "-reverse" : "")];
        }


        return () => h(props.tag, {
            class: [
                {
                    "d-flex": props.pure,
                    "flex-row": props.hDir === 'ltr',
                    "flex-row-reverse": props.hDir === 'rtl',
                    "flex-column": props.vDir === "ttb",
                    "flex-column-reverse": props.vDir === "btt",
                    //TODO: Responsive Flex Directions will be implemented later

                    /**
                     * Justify Contents
                     */
                    ["justify-content-" + props.jc]: props.jc && !props.jcOn,

                    /**
                     * Align Items
                     */
                    ["align-items-" + props.ai]: props.ai && !props.aiOn,
                },
                getFlexClasses('flex'),
                getFlexClasses('inline'),
                responsiveClasses(props.jcOn, props.jc, 'justify-content'),
                responsiveClasses(props.aiOn, props.ai, 'align-items'),
                responsiveClasses(props.asOn, props.as, 'align-self'),
                responsiveClasses(props.acOn, props.ac, 'align-content'),
                getWrapClasses('wrap'),     //wrap classes
                getWrapClasses('nowrap'),   //nowrap classes
            ]
        }, slots?.default?.())
    }
});