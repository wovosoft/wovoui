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
import {makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import FormLabel from "./FormLabel.vue";
import {computed, defineComponent, ref} from "vue";

export default defineComponent({
    name: "FormGroup",
    components: {FormLabel},
    props: {
        tag: makeString("div"),
        floating: makeBoolean(false),
        label: makeString(),
        labelFor: makeString(),
        horizontal: makeBoolean(false),
        labelSm: makeNumber(null),
        labelMd: makeNumber(null),
        labelLg: makeNumber(null),
        labelXl: makeNumber(null),
        contentSm: makeNumber(null),
        contentMd: makeNumber(null),
        contentLg: makeNumber(null),
        contentXl: makeNumber(null),
        noMarginBottom: makeBoolean(false)
    },
    setup(props) {
        const contentClasses = ref({});
        if (props.horizontal) {
            contentClasses.value = {
                ["col-sm-" + props.contentSm]: !!props.contentSm,
                ["col-md-" + props.contentMd]: !!props.contentMd,
                ["col-lg-" + props.contentLg]: !!props.contentLg,
                ["col-xl-" + props.contentXl]: !!props.contentXl,
            };
        }
        return {
            classes: computed(() => [
                "form-group", //does nothing, added so that can be queried by css/js
                {
                    "mb-3": !props.noMarginBottom,
                    "row": props.horizontal,
                    "form-floating": props.floating
                }
            ]),
            contentClasses
        }
    }
})
</script>

