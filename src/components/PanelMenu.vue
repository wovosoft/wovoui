<template>
    <ul class="list-group rounded-0 accordion">
        <li class="list-group-item border-0 p-0 m-0 accordion-item" v-for="(item,item_index) in items">
            <Button class="text-start d-flex" block squared :variant="variant" @click="setActive(item_index)">
                <Icon icon="chevron-right"/>
                <div class="mx-2 text-start">{{ item.text }}</div>
                <Icon class="position-absolute"
                      style="right: 10px;"
                      v-if="item.children"
                      :icon="item_index===active?'chevron-up':'chevron-down'"
                />
            </Button>
            <Collapse :visible="item_index===active" v-if="item.children" class="accordion-collapse">
                <PanelMenu :items="item.children" variant="light"/>
            </Collapse>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {PropType, ref} from "vue";
import Icon from "./Icon";

import {Collapse, Button} from "../index";
import {ColorVariants} from "../types/colorVariants";

type MenuItem = {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[]
}
const props = defineProps({
    items: {
        type: Array as PropType<MenuItem[]>,
        default: () => ([]),
        required: true
    },
    variant: {
        type: String as PropType<ColorVariants>,
        default: "dark"
    },
});

const active = ref<number>(0);

function setActive(index: number) {
    active.value = index === active.value ? -1 : index;
}
</script>
