<template>
    <component :is="tag" :class="classes">
        <PageLink :href="href" :tag="linkTag" :prev="prev" :next="next" :aria-label="ariaLabel">
            <slot></slot>
        </PageLink>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import {PageLink} from "../..";
import {makeBoolean, makeString, makeTag} from "@/composables";

const props = defineProps({
    tag: makeTag("li"),
    linkTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "a"},
    href: makeString("#"),
    prev: makeBoolean(false),
    next: makeBoolean(false),
    ariaLabel: makeString(),
    active: makeBoolean(false),
    disabled: makeBoolean(false),
});

const classes = computed(() => [
        "page-item",
        {
            "active": props.active,
            "disabled": props.disabled,
        }
    ]
);
</script>