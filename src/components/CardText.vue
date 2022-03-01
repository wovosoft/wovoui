<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "CardText",
    props: {
        tag: makeString("p")
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "card-text"
            ])
        }
    }
})
</script>