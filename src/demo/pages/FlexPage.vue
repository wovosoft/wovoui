<template>
    <h3>Flex Page</h3>
    <Checkbox v-model="fill">Fill {{ fill }}</Checkbox>
    <Flex jc="between">
        <FlexItem class="border p-3" :fill="fill">FLEX ITEM ONE</FlexItem>
        <FlexItem class="border p-3">FLEX ITEM TWO</FlexItem>
    </Flex>

    <h3>Flex Grow</h3>
    <Checkbox v-model="grow">Grow {{ grow }}</Checkbox>
    <Flex>
        <FlexItem class="border p-3" :grow="grow">FLEX ITEM ONE GROW</FlexItem>
        <FlexItem class="border p-3">FLEX ITEM TWO</FlexItem>
    </Flex>

    <h3>Flex Shrink</h3>
    <Checkbox v-model="shrink">Shrink {{ shrink }}</Checkbox>
    <Flex>
        <FlexItem class="border p-3" :shrink="shrink">FLEX ITEM ONE GROW</FlexItem>
        <FlexItem class="border p-3">FLEX ITEM TWO</FlexItem>
    </Flex>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Flex from "../../components/Layout/Flex.vue";
import FlexItem from "../../components/Layout/FlexItem.vue";
import Checkbox from "@/components/Form/Checkbox.vue";

const fill = ref<boolean>(false)
const grow = ref<boolean>(false)
const shrink = ref<boolean>(false)
</script>
