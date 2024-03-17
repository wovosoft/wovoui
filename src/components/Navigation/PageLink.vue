<script lang="ts" setup>
import {PageLinkProps} from "@/components";

withDefaults(defineProps<PageLinkProps>(), {
    tag: 'a',
    href: '#',
    prevText: '&laquo;',
    nextText: '&laquo;',
});

</script>

<template>
    <component :is="tag" class="page-link" :aria-label="next?'Next':(prev?'Previous':null)" :href="href">
        <slot></slot>
    </component>
</template>