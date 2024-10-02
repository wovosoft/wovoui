<template>
    <details>
        <summary :class="summaryClass" :style="summaryStyle">
            <slot name="summery">{{ summary }}</slot>
        </summary>
        <main :class="detailsClass" :style="detailsStyle">
            <slot>{{ details }}</slot>
        </main>
    </details>
</template>

<script lang="ts" setup>
import type {NativeCollapseInterface} from "@/components";

defineProps<NativeCollapseInterface>();
</script>
