<template>
    <ListGroup class="rounded-0">
        <ListGroupItem class="border-0 p-0 m-0" :key="item_index" v-for="(item, item_index) in items">
            <Button :href="item.href" :to="item.to" class="text-start d-flex" block squared :variant="triggerVariant"
                @click="setActive(item_index)">
                <Icon :icon="item.icon ?? 'chevron-right'" />
                <span class="mx-2 flex-grow-1">{{ item.text }}</span>
                <template v-if="item.children">
                    <ChevronUp v-if="item_index === active" />
                    <ChevronDown v-else />
                </template>
            </Button>
            <Collapse :visible="item_index === active" v-if="item.children">
                <PanelMenu :items="item.children" :trigger-variant="menuVariant" />
            </Collapse>
        </ListGroupItem>
    </ListGroup>
</template>

<script lang="ts">
type MenuItem = {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[];
    icon?: string;
}
</script>

<script lang="ts" setup>
import { ChevronUp, ChevronDown } from "@wovosoft/wovoui-icons";
import { PropType, ref } from "vue";
import Icon from "./Icon";

import { Collapse, Button, ListGroup, ListGroupItem } from "../index";
import { ColorVariants } from "../types/colorVariants";



const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        default: () => ([]),
        required: true
    },
    triggerVariant: {
        type: String as PropType<ColorVariants>,
        default: "dark"
    },
    menuVariant: {
        type: String as PropType<ColorVariants>,
        default: "light"
    },
});

const active = ref<number>(0);

function setActive(index: number) {
    active.value = index === active.value ? -1 : index;
}
</script>
