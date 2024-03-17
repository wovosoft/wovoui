<template>
    <component :is="tag" :class="['page-item', {'active': props.active, 'disabled': props.disabled}]">
        <PageLink :href="href" :tag="linkTag" :prev="prev" :next="next" :aria-label="ariaLabel">
            <slot></slot>
        </PageLink>
    </component>
</template>

<script lang="ts" setup>
import {PageItemProps, PageLink} from "@/components/Navigation";

const props = withDefaults(defineProps<PageItemProps>(), {
    tag: 'li',
    linkTag: 'a',
    href: '#',
});
</script>