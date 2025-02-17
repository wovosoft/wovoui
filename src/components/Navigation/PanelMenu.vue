<template>
    <ListGroup class="rounded-0">
        <ListGroupItem
            class="border-0 p-0 m-0"
            v-for="(item,item_index) in items"
            :key="item_index">
            <Button :href="item.href"
                    :to="item.to"
                    class="text-start d-flex"
                    block
                    squared
                    :variant="triggerVariant"
                    @click.prevent="itemClicked($event,item,item_index)">
                <Icon v-if="item.icon" :icon="item['icon']"/>
                <ChevronRight v-else/>
                <span class="mx-2 flex-grow-1" v-text="item.text"/>
                <template v-if="item.children && item.children.length>0">
                    <ChevronUp v-if="item_index === active"/>
                    <ChevronDown v-else/>
                </template>
            </Button>
            <Collapse v-if="item.children" :visible="item_index===active">
                <PanelMenu
                    :item-click-prevent="itemClickPrevent"
                    :items="item.children"
                    @itemClicked="it=>emit('itemClicked',it)"
                    :trigger-variant="menuVariant"
                />
            </Collapse>
        </ListGroupItem>
    </ListGroup>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref, watch} from "vue";
import type {MenuItem, PanelMenuProps} from "@/index";
import {Button, Collapse, Icon, ListGroup, ListGroupItem} from "@/components";
//@ts-ignore
import {ChevronDown, ChevronRight, ChevronUp} from "@wovosoft/wovoui-icons";

const emit = defineEmits<{
    (e: 'itemClicked', value: MenuItem): void
    (e: 'update:modelValue', value: number | null): void
}>();

const props = withDefaults(defineProps<PanelMenuProps>(), {
    triggerVariant: 'dark',
    menuVariant: 'light',
});

const active = ref<number>();

function setActive(index: number) {
    active.value = index === active.value ? -1 : index;
    emit("update:modelValue", index);
}

function itemClicked(e: any, item: MenuItem, index: number) {
    setActive(index);
    emit("itemClicked", item);
}

watch(() => props.modelValue, value => active.value = value);

onBeforeMount(() => {
    if (props.modelValue !== null) {
        active.value = props.modelValue
    }
});
</script>
