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
import {computed, defineComponent, h} from "vue";
import type {ResponsiveNumbers} from "../../types";
import {Feedback, FormLabel} from "../../";
import {makeBoolean, makeProp, makeString, makeTag} from "../../composables/useProps";

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
    tag: makeTag("div"),
    floating: makeBoolean(false),
    label: makeString(),
    labelFor: makeString(),
    horizontal: makeBoolean(false),
    labelSm: makeProp<ResponsiveNumbers>(null, Number),
    labelMd: makeProp<ResponsiveNumbers>(null, Number),
    labelLg: makeProp<ResponsiveNumbers>(null, Number),
    labelXl: makeProp<ResponsiveNumbers>(null, Number),
    contentSm: makeProp<ResponsiveNumbers>(null, Number),
    contentMd: makeProp<ResponsiveNumbers>(null, Number),
    contentLg: makeProp<ResponsiveNumbers>(null, Number),
    contentXl: makeProp<ResponsiveNumbers>(null, Number),
    noMarginBottom: makeBoolean(false),
    //form control feedback messages
    validFeedback: makeString(),
    invalidFeedback: makeString(),
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

