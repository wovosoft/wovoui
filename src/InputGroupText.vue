<template>
    <component :is="tag" class="input-group-text">
        <slot></slot>
    </component>
</template>

<script>
import {makeString} from "./shared/properties.js";

export default {
    name: "InputGroupText",
    props: {
        tag: makeString("span")
    }
}
</script>
