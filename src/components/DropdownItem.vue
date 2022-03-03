<template>
    <li role="presentation">
        <p class="dropdown-item-text" v-if="isText">
            <slot></slot>
        </p>
        <a class="dropdown-item"
           v-else
           :class="{'active':active,'disabled':disabled}"
           :href="href">
            <slot></slot>
        </a>
    </li>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "DropdownItem",
    props: {
        href: {type: String as PropType<string>, default: "#"},
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        isText: {type: Boolean as PropType<boolean>, default: false}
    }
})
</script>