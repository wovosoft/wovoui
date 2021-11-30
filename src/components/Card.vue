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

<script>
import {make, makeBoolean, makeString} from "../shared/properties";
import CardHeader from "./CardHeader.vue";
import {reactive, ref} from "vue";
import CardBody from "./CardBody.vue";
import CardFooter from "./CardFooter.vue";
import CardImg from "./CardImg.vue";

export default {
  name: "Card",
  components: {CardImg, CardFooter, CardBody, CardHeader},
  props: {
    align: makeString(null),
    bgVariant: makeString(null),

    bodyBgVariant: makeString(null),
    bodyBorderVariant: makeString(null),
    bodyClass: make([String, Array], null),
    bodyTag: makeString("div"),
    bodyTextVariant: makeString(null),

    footer: makeString(null),
    footerBgVariant: makeString(null),
    footerTag: makeString("div"),
    footerTextVariant: makeString(null),
    footerClass: make([String, Array], null),
    footerBorderVariant: makeString(null),

    header: makeString(null),
    headerBgVariant: makeString(null),
    headerBorderVariant: makeString(null),
    headerClass: makeString(null),
    headerTag: makeString("div"),
    headerTextVariant: makeString(null),

    imgAlt: makeString(null),
    imgBottom: makeBoolean(false),
    imgEnd: makeBoolean(false),
    imgLeft: makeBoolean(false),
    imgRight: makeBoolean(false),
    imgStart: makeBoolean(false),
    imgTop: makeBoolean(false),
    imgSrc: makeString(null),
    imgWidth: makeString(null),
    imgHeight: makeString(null),
    noBody: makeBoolean(false),

    overlay: makeBoolean(false),
    subTitle: makeString(null),
    subTitleTag: makeString("h6"),
    subTitleTextVariant: makeString("muted"),
    tag: makeString("div"),

    textVariant: makeString(),
    title: makeString(),
    titleTag: makeString("h4"),
  },
  setup(props) {
    let classes = ref([]);
    classes.value = [
      "card",
      {
        "flex-row": props.imgLeft || props.imgStart,
        "flex-row-reverse": props.imgRight || props.imgEnd,
      }
    ];
    let cardImageBindings = reactive({
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
    });
    let cardBodyBindings = reactive({
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
    })
    return {
      classes,
      cardImageBindings,
      cardBodyBindings
    }
  }
}
</script>