<template>
    <Dropdown v-bind="$props" class="nav-item">
        <slot></slot>
    </Dropdown>
</template>

<script>
import Dropdown from "./Dropdown.vue";
import dropdownProps from "../shared/dropdownProps.ts";
import {makeString} from "../shared/properties.js";

export default {
    name: "NavItemDropdown",
    components: {Dropdown},
    props: {
        ...dropdownProps,
        tag: makeString("li")
    }
}
</script>