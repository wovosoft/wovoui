<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "../shared/properties";
import {computed} from "vue";

export default {
    name: "CarouselCaption",
    props: {
        tag: makeString("div")
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "carousel-caption"
            ])
        }
    }
}
</script>