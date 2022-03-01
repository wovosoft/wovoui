<template>
    <component :is="wrapper" role="presentation">
        <component :is="tag" class="dropdown-header">
            <slot></slot>
        </component>
    </component>
</template>

<script>
import {makeString} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
    name: "DropdownHeader",
    props: {
        wrapper: makeString("li"),
        tag: makeString("h6")
    }
})
</script>