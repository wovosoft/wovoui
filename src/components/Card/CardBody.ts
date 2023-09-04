import {defineComponent, h} from "vue";
import CardSubTitle from "@/components/Card/CardSubTitle";
import CardTitle from "@/components/Card/CardTitle";

import {getBinaryClasses, makeBoolean, makeString, makeTag, makeTextVariant, makeVariant} from "@/composables";

export default defineComponent({
    name: "CardBody",
    props: {
        tag: makeTag("div"),
        content: makeString(null),
        variant: makeVariant(null),
        borderVariant: makeVariant(null),
        textVariant: makeTextVariant(null),
        overlay: makeBoolean(false),
        subTitle: makeString(null),
        subTitleTag: makeTag("h6"),
        subTitleTextVariant: makeTextVariant("muted"),
        title: makeString(null),
        titleTag: makeTag("h4")
    },
    setup(props, {slots}) {
        const title = () => (slots.title || props.title) ? h(CardTitle, {
            tag: props.titleTag,
            content: props.title,
        }, slots.title?.() || (() => props.title)) : null;

        const subTitle = () => (props.subTitle || slots.subTitle) ? h(CardSubTitle, {
            tag: props.subTitleTag,
            textVariant: props.subTitleTextVariant
        }, slots.subTitle?.() || (() => props.subTitle)) : null;

        return () => h(props.tag, {
                class: [
                    {
                        "card-body": !props.overlay,
                        "card-img-overlay": props.overlay,
                    },
                    getBinaryClasses({
                        bg: props.variant,
                        text: props.textVariant,
                        border: props.borderVariant
                    })
                ]
            },
            [
                title(),
                subTitle(),
                slots?.default?.()
            ]
        )
    }
})