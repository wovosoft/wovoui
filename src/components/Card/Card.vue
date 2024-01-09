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

<script lang="ts" setup>
import {CardBody, CardFooter, CardHeader, CardImg, CardPropsInterface} from ".";
import {computed} from "vue";

const props = withDefaults(defineProps<CardPropsInterface>(), {
    tag: 'div',
    bodyTag: 'div',
    footerTag: 'div',
    headerTag: 'div',
    subTitleTag: 'h6',
    subTitleTextVariant: "muted",
    titleTag: "h4",
});

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
</script>
<style>
@media (min-width: 576px) {
    .card-deck {
        display: flex;
        flex-flow: row wrap;
    }

    .card-deck .card {
        flex: 1 0 0;
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