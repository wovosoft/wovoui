<template>
    <img :src="src" :class="classes" v-bind="attributes" :alt="alt"/>
</template>

<script>
import {make, makeBoolean, makeString} from "./shared/properties.js";
import {ref} from "vue";

export default {
    name: "CardImg",
    props: {
        src: makeString(),
        alt: makeString(),
        overlay: makeBoolean(false),
        bottom: makeBoolean(false),
        end: makeBoolean(false),
        left: makeBoolean(false),
        right: makeBoolean(false),
        start: makeBoolean(false),
        top: makeBoolean(false),
        height: make([Number, String], null),
        width: make([Number, String], null),
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                {
                    "card-img": props.overlay,
                    "card-img-top": props.top,
                    "card-img-bottom": props.bottom,
                    "card-img-left": props.left || props.start,
                    "card-img-right": props.right || props.end,
                }
            ])
        }
    }
}

const attributes = ref([]);
if (props.width) {
    attributes.value.width = props.width;
}
</script>