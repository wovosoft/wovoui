<script lang="ts" setup>
import {computed, isVNode} from "vue";
import {AlertLinkPropsInterface} from "@/components";

const props = withDefaults(defineProps<AlertLinkPropsInterface>(), {
    href: '#'
});

const attrs = computed(() => ({
    class: ["alert-link"],
    href: props.href
}));
</script>

<template>
    <a v-bind="attrs">
        <slot>
            <component v-if="isVNode(content)" :is="content"></component>
            <template v-else>{{ content }}</template>
        </slot>
    </a>
</template>