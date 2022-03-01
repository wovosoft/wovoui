<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeString} from "../shared/properties";
import {computed, defineComponent} from "vue";

export default defineComponent({
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
})
</script>