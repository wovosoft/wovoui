import {defineComponent, h, PropType} from "vue";
import {CardTitle, CardSubTitle} from "../..";

import type {ColorVariants, TextVariants} from "../../types";
import {makeBoolean, makeString, makeTag, makeTextVariant, makeVariant} from "../../composables/useProps";

export default defineComponent({
    name: "CardBody",
    props: {
        tag: makeTag("div"),
        content: makeString(null),
        variant: makeVariant(null),
        borderVariant: makeVariant(null),
        textVariant: makeTextVariant(null),
        overlay: makeBoolean(false),
        subTitle: makeString(),
        subTitleTag: makeTag("h6"),
        subTitleTextVariant: makeTextVariant("muted"),
        title: makeString(),
        titleTag: makeTag("h4")
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