<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import type {AlignContent, ItemAlignment, JustifyAlignment} from "../types";
import {responsiveSizes} from "../types";


const props = defineProps({
    /**
     * HTML Tag
     */
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},

    /**
     * When it is set to false the default d-flex class won't be added.
     * By default, it is true
     */
    pure: {type: Boolean as PropType<boolean>, default: true},

    /**
     * Responsive Flex classes sm|md|lg|xl|xxl
     */
    flex: {
        type: [String, Array] as PropType<boolean | responsiveSizes | responsiveSizes[]>,
        default: null
    },

    /**
     * Responsive Inline Flex classes sm|md|lg|xl|xxl
     */
    inline: {
        type: [Boolean, String, Array] as PropType<boolean | responsiveSizes | responsiveSizes[]>,
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
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
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
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
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
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    wrap: {
        type: [Boolean, String] as PropType<boolean | 'reverse'>,
        default: false
    },
    wrapOn: {
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    nowrap: {
        type: [Boolean, String] as PropType<boolean | 'reverse'>,
        default: false
    },
    nowrapOn: {
        type: [String, Array] as PropType<responsiveSizes | responsiveSizes[]>,
        default: null
    },
    /**
     * Align Content
     */
    ac: {type: String as PropType<AlignContent>, default: null},
    acSm: {type: String as PropType<AlignContent>, default: null},
    acMd: {type: String as PropType<AlignContent>, default: null},
    acLg: {type: String as PropType<AlignContent>, default: null},
    acXl: {type: String as PropType<AlignContent>, default: null},
    acXxl: {type: String as PropType<AlignContent>, default: null},
});


const classes = computed(function () {
    function getFlexClasses(): string[] {
        if (!props.flex) {
            return [];
        }

        if (Array.isArray(props.flex)) {
            return props.flex.map(s => `d-${s}-flex`)
        }
        if (typeof props.flex === 'string' && props.flex) {
            return [
                `d-${props.flex}-flex`
            ];
        }
    }

    function getInlineClasses(): string[] {
        if (!props.inline) {
            return [];
        }
        if (props.inline === true) {
            return ["d-inline-flex"];
        }

        if (Array.isArray(props.inline)) {
            return props.inline.map(s => `d-${s}-inline-flex`)
        }
        if (typeof props.inline === 'string' && props.inline) {
            return [
                `d-${props.inline}-inline-flex`
            ];
        }
    }

    function responsiveJustifiedContent() {
        //Note: When props.jcOn exists props.jc must be provided
        if (typeof props.jcOn === "string" && props.jc) {
            return ["justify-content", props.jcOn, props.jc].join("-");
        }
        if (Array.isArray(props.jcOn) && props.jc) {
            return props.jcOn.map(dir => ["justify-content", dir, props.jc].join("-"));
        }

        return [];
    }

    function responsiveAlignItems() {
        //Note: When props.aiOn exists props.ai must be provided
        if (typeof props.aiOn === "string" && props.ai) {
            return ["align-items", props.aiOn, props.ai].join("-");
        }

        if (Array.isArray(props.aiOn) && props.ai) {
            return props.aiOn.map(dir => ["align-items", dir, props.ai].join("-"));
        }

        return [];
    }

    function responsiveAlignSelf() {
        //Note: When props.asOn exists props.as must be provided
        if (typeof props.aiOn === "string" && props.ai) {
            return ["align-self", props.aiOn, props.ai].join("-");
        }

        if (Array.isArray(props.aiOn) && props.ai) {
            return props.aiOn.map(dir => ["align-self", dir, props.ai].join("-"));
        }

        return [];
    }

    function getWrapClasses(type: 'wrap' | 'nowrap'): string[] {
        if (!props[type]) {
            return [];
        }

        let reverse = props[type] === 'reverse' ? 'reverse' : null;

        if (Array.isArray(props[type + "On"]) && props[type + "On"].length > 0) {
            return props[type + "On"].map(wrapOn => [type, wrapOn, reverse].filter(i => i).join("-"));
        }

        return [type + (reverse ? "-reverse" : "")];
    }

    function getAlignContentClasses() {
        return ['ac', 'acSm', 'acMd', 'acLg', 'acXl', 'acXxl'].map(function (item) {
            if (props[item]) {
                return ["align-content", item, props[item]].join("-");
            }
            return null;
        });
    }

    return [
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
        getFlexClasses(),
        getInlineClasses(),
        responsiveJustifiedContent(),
        responsiveAlignItems(),
        responsiveAlignSelf(),
        getWrapClasses('wrap'),     //wrap classes
        getWrapClasses('nowrap'),   //nowrap classes
        getAlignContentClasses(),
    ];
});
</script>
