<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {computed} from "vue";
import {makeString} from "../shared/properties";

export default {
    name: "CarouselInner",
    props: {
        tag: makeString("div")
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "carousel-inner"
            ])
        }
    }
}
</script>