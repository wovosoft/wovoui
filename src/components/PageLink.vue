<template>
    <component :is="tag" :class="classes" :href="href" :aria-label="ariaLabelText">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";

export default defineComponent({
    name: "PageLink",
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: {type: String as PropType<string>, default: "#"},
        prev: {type: Boolean as PropType<boolean>, default: false},
        next: {type: Boolean as PropType<boolean>, default: false},
        prevText: {type: String as PropType<string>, default: '&laquo;'},
        nextText: {type: String as PropType<string>, default: '&laquo;'},
        ariaLabel: {type: String as PropType<string>, default: null}
    },
    setup(props, context) {
        return {
            classes: computed(() => [
                "page-link"
            ]),
            ariaLabelText: computed(() => {
                if (props.next) {
                    return "Next";
                }
                if (props.prev) {
                    return "Previous";
                }
                return null;
            })
        }
    }
})
</script>