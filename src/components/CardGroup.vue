<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {makeBoolean, makeString} from "../shared/properties.js";
import {computed} from "vue";

export default {
    name: "CardGroup",
    props: {
        tag: makeString("div"),
        deck: makeBoolean(false),
        columns: makeBoolean(false),
    },
    setup(props) {
        return {
            classes: computed(() => [
                {
                    "card-group": !props.deck && !props.columns,
                    "card-deck": props.deck,
                    "card-columns": props.columns,
                }
            ])
        }
    }
}
</script>
