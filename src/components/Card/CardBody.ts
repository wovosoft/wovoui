import {defineComponent, h, PropType} from "vue";
import CardTitle from "./CardTitle";
import CardSubTitle from "./CardSubTitle";

import type {ColorVariants} from "../../types/colorVariants";
import type {textVariants} from "../../types/textVariants";

export default defineComponent({
    name: "CardBody",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        content: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: null},
        borderVariant: {type: String as PropType<ColorVariants>, default: null},
        textVariant: {type: String as PropType<ColorVariants>, default: null},
        overlay: {type: Boolean as PropType<boolean>, default: false},
        subTitle: {type: String as PropType<string>, default: null},
        subTitleTag: {type: String as PropType<string>, default: "h6"},
        subTitleTextVariant: {type: String as PropType<ColorVariants | textVariants>, default: "muted"},
        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h4"}
    },
    setup(props, {slots}) {
        const title = () => {
            return (slots.title || props.title) ? h(CardTitle, {
                tag: props.titleTag,
                content: props.title,
            }, slots.title?.() || (() => props.title)) : null;
        }
        const subTitle = () => {
            return (props.subTitle || slots.subTitle) ? h(CardSubTitle, {
                tag: props.subTitleTag,
                textVariant: props.subTitleTextVariant
            }, slots.subTitle?.() || (() => props.subTitle)) : null;
        }
        return () => h(props.tag, {
                class: {
                    "card-body": !props.overlay,
                    "card-img-overlay": props.overlay,
                    ["bg-" + props.variant]: !!props.variant,
                    ["text-" + props.textVariant]: !!props.textVariant,
                    ["border-" + props.borderVariant]: !!props.borderVariant,
                }
            },
            [
                title(),
                subTitle(),
                slots.default?.()
            ]
        )
    }
})