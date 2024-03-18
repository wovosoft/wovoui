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
import {computed, provide} from "vue";
import {FormLabel, HasFloatingLabelInjectionKey} from "@/components";
import FeedbackMessages from "./FeedbackMessages.vue";
import {FormGroupPropsInterface} from "@/components/Form/useFormHelpers";

const {validFeedback, invalidFeedback, ...props} = withDefaults(defineProps<FormGroupPropsInterface>(), {
    tag: "div",
    floating: false,
    horizontal: false,
    noMarginBottom: false,
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

provide(HasFloatingLabelInjectionKey, props.floating);
</script>

