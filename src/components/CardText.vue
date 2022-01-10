<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {computed} from "vue";
import {makeString} from "../shared/properties.js";

export default {
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
}
</script>