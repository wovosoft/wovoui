<template>
    <li role="menuitem">
        <button
            class="dropdown-item"
            type="button"
            :class="{'active':active,'disabled':disabled}">
            <slot></slot>
        </button>
    </li>
</template>

<script lang="ts" setup>
import type {DropdownButtonPropsInterface} from "@/components/Dropdown/useDropdown";

withDefaults(defineProps<DropdownButtonPropsInterface>(), {
    active: false,
    disabled: false
})
</script>