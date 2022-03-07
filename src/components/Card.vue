<template>
    <component :is="tag" :class="classes">
        <CardHeader
            v-if="$slots.header || header"
            :tag="headerTag"
            :class="headerClass"
            :border-variant="headerBorderVariant"
            :text-variant="headerTextVariant"
            :variant="headerBgVariant">
            <slot name="header">
                {{ header }}
            </slot>
        </CardHeader>
        <CardImg v-if="imgSrc && !imgBottom" v-bind="cardImageBindings"/>

        <CardBody v-if="!noBody" v-bind="cardBodyBindings">
            <template #title v-if="$slots.title">
                <slot name="title"></slot>
            </template>
            <slot></slot>
        </CardBody>
        <template v-else>
            <slot></slot>
        </template>

        <CardImg v-if="imgSrc && imgBottom" v-bind="cardImageBindings"/>
        <CardFooter
            v-if="$slots.footer || footer"
            :tag="footerTag"
            :class="footerClass"
            :border-variant="footerBorderVariant"
            :text-variant="footerTextVariant"
            :variant="footerBgVariant">
            <slot name="footer">
                {{ footer }}
            </slot>
        </CardFooter>
    </component>
</template>

<script lang="ts">
import CardHeader from "./CardHeader";
import {computed, defineComponent, PropType} from "vue";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImg from "./CardImg";
import {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    name: "Card",
    components: {CardImg, CardFooter, CardBody, CardHeader},
    props: {
        align: {type: String as PropType<string>, default: null},
        bgVariant: {type: String as PropType<ColorVariants>, default: null},

        bodyBgVariant: {type: String as PropType<ColorVariants>, default: null},
        bodyBorderVariant: {type: String as PropType<ColorVariants>, default: null},
        bodyClass: {type: [String, Array] as PropType<string | Array<any>>, default: null},
        bodyTag: {type: String as PropType<string>, default: "div"},
        bodyTextVariant: {type: String as PropType<ColorVariants>, default: null},

        footer: {type: String as PropType<string>, default: null},
        footerBgVariant: {type: String as PropType<ColorVariants>, default: null},
        footerTag: {type: String as PropType<string>, default: "div"},
        footerTextVariant: {type: String as PropType<ColorVariants>, default: null},
        footerClass: {type: [String, Array] as PropType<string | Array<any>>, default: null},
        footerBorderVariant: {type: String as PropType<string>, default: null},

        header: {type: String as PropType<string>, default: null},
        headerBgVariant: {type: String as PropType<ColorVariants>, default: null},
        headerBorderVariant: {type: String as PropType<ColorVariants>, default: null},
        headerClass: {type: [Array, String, Object] as PropType<Array<any> | string | object>, default: null},
        headerTag: {type: String as PropType<string>, default: "div"},
        headerTextVariant: {type: String as PropType<ColorVariants>, default: null},

        imgAlt: {type: String as PropType<string>, default: null},
        imgBottom: {type: Boolean as PropType<boolean>, default: false},
        imgEnd: {type: Boolean as PropType<boolean>, default: false},
        imgLeft: {type: Boolean as PropType<boolean>, default: false},
        imgRight: {type: Boolean as PropType<boolean>, default: false},
        imgStart: {type: Boolean as PropType<boolean>, default: false},
        imgTop: {type: Boolean as PropType<boolean>, default: false},
        imgSrc: {type: String as PropType<string>, default: null},
        imgWidth: {type: String as PropType<string>, default: null},
        imgHeight: {type: String as PropType<string>, default: null},
        noBody: {type: Boolean as PropType<boolean>, default: false},

        overlay: {type: Boolean as PropType<boolean>, default: false},
        subTitle: {type: String as PropType<string>, default: null},
        subTitleTag: {type: String as PropType<string>, default: "h6"},
        subTitleTextVariant: {type: String as PropType<string>, default: "muted"},
        tag: {type: String as PropType<string>, default: "div"},

        textVariant: {type: String as PropType<ColorVariants>, default: null},
        borderVariant: {type: String as PropType<ColorVariants>, default: null},
        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<string>, default: "h4"},
    },
    setup(props) {
        const classes = computed(() => [
            "card",
            {
                "flex-row": props.imgLeft || props.imgStart,
                "flex-row-reverse": props.imgRight || props.imgEnd,
                ["bg-" + props.bgVariant]: props.bgVariant,
                ["text-" + props.textVariant]: props.textVariant,
                ["border-" + props.borderVariant]: props.borderVariant
            }
        ]);
        const cardImageBindings = computed(() => ({
            alt: props.imgAlt,
            bottom: props.imgBottom,
            end: props.imgEnd,
            left: props.imgLeft,
            right: props.imgRight,
            start: props.imgStart,
            top: props.imgTop,
            src: props.imgSrc,
            width: props.imgWidth,
            height: props.imgHeight,
            class: {
                "card-img": props.overlay
            }
        }));
        const cardBodyBindings = computed(() => ({
            tag: props.bodyTag,
            variant: props.bodyBgVariant,
            borderVariant: props.bodyBorderVariant,
            textVariant: props.bodyTextVariant,
            overlay: props.overlay,
            title: props.title,
            titleTag: props.titleTag,
            class: props.bodyClass,
            subTitle: props.subTitle,
            subTitleTag: props.subTitleTag,
            subTitleTextVariant: props.subTitleTextVariant
        }));
        return {
            classes,
            cardImageBindings,
            cardBodyBindings
        }
    }
})
</script>
<style>
@media (min-width: 576px) {
    .card-deck {
        display: flex;
        flex-flow: row wrap;
    }

    .card-deck .card {
        flex: 1 0 0%;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px
    }

    .card-deck .card:first-child {
        margin-left: 0;
    }

    .card-deck .card:last-child {
        margin-right: 0;
    }
}

.card-columns .card {
    margin-bottom: .75rem
}

@media (min-width: 576px) {
    .card-columns {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
        -webkit-column-gap: 1.25rem;
        -moz-column-gap: 1.25rem;
        grid-column-gap: 1.25rem;
        column-gap: 1.25rem;
        orphans: 1;
        widows: 1
    }

    .card-columns .card {
        display: inline-block;
        width: 100%
    }
}

</style>