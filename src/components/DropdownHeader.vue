<template>
    <component :is="wrapper" role="presentation">
        <component :is="tag" class="dropdown-header">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "DropdownHeader",
    props: {
        wrapper: {type: String as PropType<string>, default: "li"},
        tag: {type: String as PropType<string>, default: "h6"},
    }
})
</script>