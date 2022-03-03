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

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "DropdownButton",
    props: {
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
    }
})
</script>