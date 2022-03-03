<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "CarouselInner",
    props: {
        tag: {type: String as PropType<string>, default: "div"}
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