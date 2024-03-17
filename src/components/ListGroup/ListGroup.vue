<script lang="ts" setup>
import type {ListGroupProps} from "@/index";

withDefaults(defineProps<ListGroupProps>(), {
    tag: 'ul',
});
</script>

<template>
    <component
        :is="numbered?'ol':tag"
        class="list-group"
        :class="{
            'list-group-flush': flush,
            'list-group-numbered': numbered,
            ['list-group-horizontal' + (typeof horizontal === 'string' ? '-' + horizontal : '')]: horizontal,
        }">
        <slot></slot>
    </component>
</template>