<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {makeBoolean, makeString} from "../shared/properties.js";
import {reactive, defineComponent} from "vue";

export default defineComponent({
    name: "Container",
    props: {
        tag: makeString("div"),
        fluid: makeBoolean(false)
    },
    setup(props) {
        const classes = reactive({
            "container": !props.fluid,
            "container-fluid": props.fluid,
        });
        return {
            classes
        }
    }
})
</script>