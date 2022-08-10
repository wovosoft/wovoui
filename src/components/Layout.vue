<template>
    <div ref="appBar">
        <slot name="app_bar"></slot>
    </div>
    <div class="d-flex align-items-stretch" :style="{height:'calc(100vh - '+ appBarHeight +'px)'}">
        <Collapse v-model="sidebarOpened" horizontal :width="230" class="border-end">
            <slot name="sidebar"></slot>
        </Collapse>
        <div class="flex-grow-1 overflow-auto">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

import {useElementSize} from "@vueuse/core";
import Collapse from "./Collapse";


const appBar = ref<HTMLElement | null>(null);
//@ts-ignore
const {height: appBarHeight} = useElementSize(appBar);

const sidebarOpened = ref<boolean>(true);

function toggle() {
    sidebarOpened.value = !sidebarOpened.value;
}

defineExpose({
    toggle
});
</script>
