<template>
    <div ref="appBar">
        <slot name="app_bar"></slot>
    </div>
    <div class="d-flex align-items-stretch" :style="{height:'calc(100vh - '+ elementSize.height +'px)'}">
        <Collapse v-model="sidebarOpened" :horizontal="true" :width="230" class="border-end">
            <slot name="sidebar"></slot>
        </Collapse>
        <div class="flex-grow-1 overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {MaybeComputedElementRef, MaybeElement, useElementSize} from "@vueuse/core";
import {Collapse} from "@/components/Accordion";

const appBar = ref<MaybeComputedElementRef<MaybeElement> | null>(null);

const elementSize = useElementSize(appBar as MaybeComputedElementRef<MaybeElement>);

const sidebarOpened = ref<boolean>(true);

function toggle() {
    sidebarOpened.value = !sidebarOpened.value;
}

defineExpose({
    toggle
});
</script>
