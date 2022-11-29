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
import {makeBoolean} from "../../composables/useProps";

const props = defineProps({
    active: makeBoolean(false),
    disabled: makeBoolean(false),
});
</script>