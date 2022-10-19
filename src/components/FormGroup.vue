<template>
    <component :is="tag" :class="classes" role="group">
        <slot v-if="floating && !horizontal"></slot>
        <FeedbackMessages/>

        <FormLabel
            v-if="label || $slots.label"
            :horizontal="horizontal"
            :sm="labelSm"
            :md="labelMd"
            :lg="labelLg"
            :xl="labelXl"
            :for="labelFor">
            <slot name="label">
                {{ label }}
            </slot>
        </FormLabel>
        <slot v-if="!floating && !horizontal"></slot>
        <FeedbackMessages/>
        <div v-if="horizontal" :class="contentClasses">
            <slot></slot>
            <FeedbackMessages/>
        </div>
    </component>
</template>

<script lang="ts" setup>
import FormLabel from "./FormLabel";
import {computed, defineComponent, h, PropType} from "vue";
import type {responsiveNumbers} from "../types/responsiveLayoutSizes";
import Feedback from "./Feedback.vue";

const FeedbackMessages = defineComponent({
    setup() {
        if (!(props.validFeedback || props.invalidFeedback)) {
            return () => null;
        }
        return () => [
            //valid feedback
            (props.validFeedback) ? h(Feedback, {type: 'valid', message: props.validFeedback}) : null,
            //invalid feedback
            (props.invalidFeedback) ? h(Feedback, {type: 'invalid', message: props.invalidFeedback}) : null,
        ]
    }
});

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    floating: {type: Boolean as PropType<boolean>, default: false},
    label: {type: String as PropType<string>, default: null},
    labelFor: {type: String as PropType<string>, default: null},
    horizontal: {type: Boolean as PropType<boolean>, default: false},
    labelSm: {type: Number as PropType<responsiveNumbers>, default: null},
    labelMd: {type: Number as PropType<responsiveNumbers>, default: null},
    labelLg: {type: Number as PropType<responsiveNumbers>, default: null},
    labelXl: {type: Number as PropType<responsiveNumbers>, default: null},
    contentSm: {type: Number as PropType<responsiveNumbers>, default: null},
    contentMd: {type: Number as PropType<responsiveNumbers>, default: null},
    contentLg: {type: Number as PropType<responsiveNumbers>, default: null},
    contentXl: {type: Number as PropType<responsiveNumbers>, default: null},
    noMarginBottom: {type: Boolean as PropType<boolean>, default: false},
    //form control feedback messages
    validFeedback: {type: String as PropType<string>, default: null},
    invalidFeedback: {type: String as PropType<string>, default: null},
});

const classes = computed(() => ([
    "form-group", //does nothing, added so that can be queried by css/js
    {
        "mb-3": !props.noMarginBottom,
        "row": props.horizontal,
        "form-floating": props.floating
    }
]));

const contentClasses = computed(() => {
    return props.horizontal ? ({
        ["col-sm-" + props.contentSm]: !!props.contentSm,
        ["col-md-" + props.contentMd]: !!props.contentMd,
        ["col-lg-" + props.contentLg]: !!props.contentLg,
        ["col-xl-" + props.contentXl]: !!props.contentXl,
    }) : null;
});
</script>

