<script setup lang="ts">
import {Dropdown} from "bootstrap";
import {Input, DropdownMenu} from "@/components";
import {computed, onBeforeUnmount, onMounted, PropType, ref, useModel} from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number] as PropType<string | number>
    },
    options: {
        type: Array as PropType<string[]>,
        default: () => ([])
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

const model = useModel(props, 'modelValue');

const dropdownEl = ref<HTMLDivElement>();
const filterEl = ref<InstanceType<typeof Input>>();
const theMenu = ref<InstanceType<typeof DropdownMenu>>();


//@ts-ignore
const ddInstance = () => Dropdown.getOrCreateInstance(filterEl.value?.$el);

onMounted(() => {
    ddInstance();
    //listen for events
    // @ts-ignore
    Object.keys(eventHandlers).forEach((key: keyof typeof eventHandlers) => {
        dropdownEl.value?.addEventListener(key, eventHandlers[key])
    });
});

onBeforeUnmount(() => {
    ddInstance().dispose();
    // @ts-ignore
    Object.keys(eventHandlers).forEach((key: keyof typeof eventHandlers) => {
        dropdownEl.value?.removeEventListener(key, eventHandlers[key])
    })
});

const searchOptions = (e: Event & { target: HTMLInputElement }) => {
    if (!isOpened.value) {
        ddInstance()?.show();
    }
    console.log(e.target.value)
};


const selectOption = (op: string) => {
    model.value = op;
    filterEl.value?.$el?.focus();
    hide();
};


const isOpened = ref<boolean>(false);

const show = () => ddInstance()?.show();

const hide = () => ddInstance()?.hide();

const toggle = () => ddInstance()?.toggle();

defineExpose({
    show, hide, toggle, isOpened
});

const keyDownFilter = () => {
    theMenu.value?.$el?.querySelector('.dropdown-item')?.focus();
};

const filteredOptions = computed(() => {
    return props.options?.filter((op: string) => op.toLocaleLowerCase().includes((model.value || '')?.toLocaleString()))
});
</script>

<template>
    <div class="dropdown" ref="dropdownEl">
        <Input
            v-bind="$attrs"
            v-model="model"
            ref="filterEl"
            class="dropdown-toggle"
            data-bs-toggle="dropdown"
            @keydown.down.prevent="keyDownFilter"
            @input="searchOptions"
        />
        <DropdownMenu ref="theMenu" block :style="{maxHeight:maxHeight,overflow:'auto'}" tabindex="0">
            <li v-for="op in filteredOptions">
                <a href="#" @click.prevent="selectOption(op)" class="dropdown-item">
                    {{ op }}
                </a>
            </li>
        </DropdownMenu>
    </div>
</template>