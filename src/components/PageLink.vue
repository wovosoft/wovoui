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
        tag: {type: String, default: "a"},
        href: {type: String, default: "#"},
        prev: {type: Boolean as PropType<true | false>, default: false},
        next: {type: Boolean as PropType<true | false>, default: false},
        prevText: {type: String, default: '&laquo;'},
        nextText: {type: String, default: '&laquo;'},
        ariaLabel: {type: String, default: null}
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