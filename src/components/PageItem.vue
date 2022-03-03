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
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "li"},
        linkTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
        href: {type: String as PropType<string>, default: "#"},
        prev: {type: Boolean as PropType<boolean>, default: false},
        next: {type: Boolean as PropType<boolean>, default: false},
        ariaLabel: {type: String as PropType<string>, default: null},
        active: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
    },
    components: {PageLink},
    setup(props, context) {
        return {
            classes: computed(() => ([
                "page-item", {
                    "active": props.active,
                    "disabled": props.disabled,
                }
            ]))
        }
    }
})
</script>