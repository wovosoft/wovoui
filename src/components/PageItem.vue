<template>
    <component :is="tag" :class="classes">
        <PageLink :href="href" :tag="linkTag" :prev="prev" :next="next" :aria-label="ariaLabel">
            <slot></slot>
        </PageLink>
    </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import PageLink from "./PageLink.vue";

export default defineComponent({
    name: "PageItem",
    props: {
        tag: {type: String, default: "li"},
        linkTag: {type: String, default: "a"},
        href: {type: String, default: "#"},
        prev: {type: Boolean as PropType<true | false>, default: false},
        next: {type: Boolean as PropType<true | false>, default: false},
        ariaLabel: {type: String, default: null},
        active: {type: Boolean as PropType<true | false>, default: false},
        disabled: {type: Boolean as PropType<true | false>, default: false},
    },
    components: {PageLink},
    setup(props, context) {
        return {
            classes: computed(() => [
                "page-item", {
                    "active": props.active,
                    "disabled": props.disabled,
                }
            ])
        }
    }
})
</script>