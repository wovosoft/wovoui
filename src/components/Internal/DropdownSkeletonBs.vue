<script setup lang="ts">
import {Dropdown} from "bootstrap";
import {Input, DropdownMenu} from "@/components";
import {onBeforeUnmount, onMounted, PropType, ref} from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number] as PropType<string | number>
    },
    maxHeight: {
        type: String as PropType<string>,
        default: () => '300px'
    }
});

const emit = defineEmits<{
    'update:modelValue': [id: any],
    show: [id: Event],
    hide: [id: Event],
    shown: [id: Event],
    hidden: [id: Event],
}>();

const filterEl = ref<InstanceType<typeof Input>>();
const dropdownEl = ref<HTMLDivElement>();

//@ts-ignore
const dd = () => Dropdown.getOrCreateInstance(filterEl.value?.$el);

const eventHandlers = {
    'show.bs.dropdown': (e: Event) => emit('show', e),
    'shown.bs.dropdown': (e: Event) => {
        emit('shown', e);
        isOpened.value = true;
    },
    'hide.bs.dropdown': (e: Event) => emit('hide', e),
    'hidden.bs.dropdown': (e: Event) => {
        emit('hidden', e);
        isOpened.value = false;
    }
};

onMounted(() => {
    dd();
    //listen for events
    // @ts-ignore
    Object.keys(eventHandlers).forEach((key: keyof typeof eventHandlers) => {
        dropdownEl.value?.addEventListener(key, eventHandlers[key])
    });
});

onBeforeUnmount(() => {
    dd().dispose();
    // @ts-ignore
    Object.keys(eventHandlers).forEach((key: keyof typeof eventHandlers) => {
        dropdownEl.value?.removeEventListener(key, eventHandlers[key])
    })
});


const isOpened = ref<boolean>(false);
const theMenu = ref<InstanceType<typeof DropdownMenu>>();

const show = () => {
    dd()?.show();
};

const hide = () => {
    dd()?.hide();
};

const toggle = () => isOpened.value ? hide() : show();

defineExpose({
    show, hide, toggle, isOpened
});
</script>

<template>
    <div class="dropdown" ref="dropdownEl">
        <slot name="toggle_btn"></slot>
        <DropdownMenu ref="theMenu" :style="{maxHeight:maxHeight,overflow:'auto'}">
            <slot></slot>
        </DropdownMenu>
    </div>
</template>