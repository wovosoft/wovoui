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
import {PropType} from "vue";

defineProps({
    active: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
});
</script>