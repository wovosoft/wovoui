<template>
    <Dropdown v-bind="$props" class="nav-item">
        <slot></slot>
    </Dropdown>
</template>

<script lang="ts">
import Dropdown from "./Dropdown.vue";
import dropdownProps from "../shared/dropdownProps.ts";
import {makeString} from "../shared/properties.js";
import {defineComponent} from "vue";

export default defineComponent({
    name: "NavItemDropdown",
    components: {Dropdown},
    props: {
        ...dropdownProps,
        isNav:{type:Boolean,default:true},
        tag: makeString("li")
    }
})
</script>