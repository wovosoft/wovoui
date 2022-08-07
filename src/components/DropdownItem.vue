<template>
    <li role="presentation">
        <slot v-if="noItemTag" class="dropdown-item"></slot>
        <component :is="itemTag" class="dropdown-item" v-else-if="itemTag">
            <slot></slot>
        </component>
        <p class="dropdown-item-text" v-else-if="isText">
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
        to: {type: Object as PropType<object>, default: null},
        noItemTag: {type: Boolean as PropType<boolean>, default: false},
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        isText: {type: Boolean as PropType<boolean>, default: false},
        itemTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: null}
    }
})
</script>