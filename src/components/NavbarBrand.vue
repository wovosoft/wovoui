<template>
    <component :is="tag" :class="classes" v-bind="attributes">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "NavbarBrand",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: {type: String as PropType<string>, default: "#"},
    },
    setup(props) {
        const attributes = computed(() => {
            return {
                "href": props.tag === 'a' ? props.href : null
            }
        });
        return {
            classes: computed(() => (["navbar-brand"])),
            attributes
        }
    }
})
</script>