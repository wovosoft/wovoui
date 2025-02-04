<script lang="ts" setup>
import {computed} from "vue";
import type {FlexProps, ItemAlignment, JustifyAlignment, ResponsiveSizes} from "@/index";
import {join} from "lodash";

const props = withDefaults(defineProps<FlexProps>(), {
    tag: 'div',
    pure: true,
});

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

function responsiveClasses(resOn?: ResponsiveSizes | ResponsiveSizes[], res?: JustifyAlignment | ItemAlignment, resFor?: string) {
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

const classes = computed(() => [
    {
        'd-flex': props.pure,
        'flex-row': props.hDir === 'ltr',
        'flex-row-reverse': props.hDir === 'rtl',
        'flex-column': props.vDir === "ttb",
        'flex-column-reverse': props.vDir === "btt",
        //TODO: Responsive Flex Directions will be implemented later

        /**
         * Justify Contents
         */
        ['justify-content-' + props.jc]: props.jc && !props.jcOn,

        /**
         * Align Items
         */
        ['align-items-' + props.ai]: props.ai && !props.aiOn,
    },
    getFlexClasses('flex'),
    getFlexClasses('inline'),
    responsiveClasses(props.jcOn, props.jc, 'justify-content'),
    responsiveClasses(props.aiOn, props.ai, 'align-items'),
    responsiveClasses(props.asOn, props.as, 'align-self'),
    responsiveClasses(props.acOn, props.ac, 'align-content'),
    getWrapClasses('wrap'),     //wrap classes
    getWrapClasses('nowrap'),   //nowrap classes
]);
</script>

<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>