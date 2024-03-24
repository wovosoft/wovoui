<template>
    <div style="max-height: 100vh;overflow: hidden;">
        <slot name="app_bar"></slot>
        <Flex>
            <FlexItem class="sticky-top" style="top: 55px;">
                <Collapse v-model="sidebarOpened"
                          :horizontal="true"
                          :width="230"
                          class="border-end">
                    <slot name="sidebar"></slot>
                </Collapse>
            </FlexItem>
            <FlexItem grow class="overflow-auto" style="height: 100vh;">
                <slot></slot>
            </FlexItem>
        </Flex>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, useSlots} from "vue";
import {MaybeComputedElementRef, MaybeElement, useElementSize} from "@vueuse/core";
import {Collapse} from "@/components/Accordion";
import {Flex, FlexItem} from "@/components";

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
