<template>
    <DropdownHeader :tag="headerTag" :wrapper="headerWrapper">
        {{ header }}
    </DropdownHeader>
    <slot></slot>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {makeString} from "../shared/properties.js";
import DropdownHeader from "./DropdownHeader.vue";

export default defineComponent({
    name: "DropdownGroup",
    components: {DropdownHeader},
    props: {
        header: makeString(),
        headerTag: makeString("h6"),
        headerWrapper: makeString("li")
    }
})
</script>