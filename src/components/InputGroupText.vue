<template>
    <component :is="tag" class="input-group-text">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";

export default defineComponent({
    name: "InputGroupText",
    props: {
        tag: makeString("span")
    }
})
</script>
