<template>
    <component :is="tag" :class="classes" role="group">
        <slot v-if="floating && !horizontal"></slot>
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
        <div v-if="horizontal" :class="contentClasses">
            <slot></slot>
        </div>
    </component>
</template>

<script lang="ts">
import FormLabel from "./FormLabel";
import {computed, defineComponent, PropType} from "vue";
import type {responsiveNumbers} from "../types/responsiveLayoutSizes";

export default defineComponent({
    name: "FormGroup",
    components: {FormLabel},
    props: {
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
        noMarginBottom: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props) {
        return {
            classes: computed(() => ([
                "form-group", //does nothing, added so that can be queried by css/js
                {
                    "mb-3": !props.noMarginBottom,
                    "row": props.horizontal,
                    "form-floating": props.floating
                }
            ])),
            contentClasses: computed(() => {
                return props.horizontal ? ({
                    ["col-sm-" + props.contentSm]: !!props.contentSm,
                    ["col-md-" + props.contentMd]: !!props.contentMd,
                    ["col-lg-" + props.contentLg]: !!props.contentLg,
                    ["col-xl-" + props.contentXl]: !!props.contentXl,
                }) : null;
            })
        }
    }
})
</script>

