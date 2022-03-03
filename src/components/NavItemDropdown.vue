<template>
    <Dropdown v-bind="$props" class="nav-item">
        <slot></slot>
    </Dropdown>
</template>

<script lang="ts">
import Dropdown from "./Dropdown.vue";
import dropdownProps from "../shared/dropdownProps";
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "NavItemDropdown",
    components: {Dropdown},
    props: {
        ...dropdownProps,
        isNav: {type: Boolean as PropType<boolean>, default: true},
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"}
    }
})
</script>