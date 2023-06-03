<template>
    <component :is="tag" :class="classes" role="group">
        <template v-if="floating && !horizontal">
            <slot></slot>
            <FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
        </template>
        
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
        
        <template v-if="!floating && !horizontal">
            <slot></slot>
            <FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
        </template>
        
        <div v-else-if="horizontal" :class="contentClasses">
            <slot></slot>
            <FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
        </div>
    </component>
</template>


<script lang="ts" setup>
import {computed} from "vue";
import type {ResponsiveNumbers} from "@/types";
import {FormLabel} from "@/";
import {makeBoolean, makeProp, makeString, makeTag} from "@/composables";
import FeedbackMessages from "./FeedbackMessages.vue";

const {validFeedback, invalidFeedback, ...props} = defineProps({
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

