<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {makeString} from "../shared/properties";

export default defineComponent({
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
})
</script>