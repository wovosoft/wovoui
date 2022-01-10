<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script>
import {computed} from "vue";
import {makeString} from "../shared/properties.js";

export default {
    name: "AlertHeading",
    props: {
        tag: makeString("h4")
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "alert-heading"
            ])
        }
    }
}
</script>