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

<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {ref} from "vue";
import CardTitle from "./CardTitle.vue";
import CardSubTitle from "./CardSubTitle.vue";

export default {
  name: "CardBody",
  components: {CardSubTitle, CardTitle},
  props: {
    content: makeString(),
    variant: makeString(),
    borderVariant: makeString(),
    tag: makeString("div"),
    textVariant: makeString(),
    overlay: makeBoolean(false),
    subTitle: makeString(),
    subTitleTag: makeString("h6"),
    subTitleTextVariant: makeString("muted"),
    title: makeString(),
    titleTag: makeString("h4")
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
}
</script>
