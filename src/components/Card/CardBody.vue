<script lang="ts" setup>
import {computed} from "vue";
import CardSubTitle from "./CardSubTitle.vue";
import CardTitle from "./CardTitle.vue";

import {getBinaryClasses} from "@/composables";
import {CardBodyPropsInterface} from "@/components";

const props = withDefaults(defineProps<CardBodyPropsInterface>(), {
  tag: "div",
  subTitleTag: "h6",
  subTitleTextVariant: "muted",
  titleTag: "h4"
});

const attrs = computed(() => ({
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
}));
</script>

<template>
  <component :is="tag" v-bind="attrs">
    <slot name="title">
      <CardTitle :tag="titleTag">
        {{ title }}
      </CardTitle>
    </slot>
    <slot name="subTitle">
      <CardSubTitle :tag="subTitleTag" :text-variant="subTitleTextVariant">
        {{ subTitle }}
      </CardSubTitle>
    </slot>
    <slot></slot>
  </component>
</template>