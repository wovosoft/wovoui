<template>
    <component :is="tag" :class="classes">
        <CardTitle :tag="titleTag" v-if="title||$slots.title">
            <slot name="title">
                {{ title }}
            </slot>
        </CardTitle>
        <CardSubTitle
            v-if="subTitle||$slots.subTitle"
            :tag="subTitleTag"
            :text-variant="subTitleTextVariant">
            <slot name="subTitle">
                {{ subTitle }}
            </slot>
        </CardSubTitle>
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import CardTitle from "./CardTitle";
import CardSubTitle from "./CardSubTitle";

import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "CardBody",
    components: {CardSubTitle, CardTitle},
    props: {
        content: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null},
        borderVariant: {type: String as PropType<ColorVariants>, default: null},
        tag: {type: String as PropType<string>, default: "div"},
        textVariant: {type: String as PropType<ColorVariants>, default: null},
        overlay: {type: Boolean as PropType<boolean>, default: false},
        subTitle: {type: String as PropType<string>, default: null},
        subTitleTag: {type: String as PropType<string>, default: "h6"},
        subTitleTextVariant: {type: String as PropType<string>, default: "muted"},
        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<string>, default: "h4"}
    },
    setup(props, context) {
        let classes = ref([]);
        classes.value = [
            {
                "card-body": !props.overlay,
                "card-img-overlay": props.overlay,
                ["bg-" + props.variant]: !!props.variant,
                ["text-" + props.textVariant]: !!props.textVariant,
                ["border-" + props.borderVariant]: !!props.borderVariant,
            }
        ];
        return {
            classes
        }
    }
})
</script>
