<template>
    <div :class="classes" class="position-relative" @keyup.esc="onEscPressed" v-on-click-outside="onClickOutside">
        <InputGroup :size="toggleSize">
            <slot name="prepend"></slot>
            <button :class="toggleClasses"
                    ref="toggle_btn"
                    type="button"
                    @click="toggle"
                    @keyup.down="onMenuOpened"
                    :aria-expanded="isOpened">
                <slot name="label" :selectedItem="selectedItem">
                    {{ getLabel(selectedItem) }}
                </slot>
            </button>
            <slot name="append"></slot>
        </InputGroup>
        <DropdownMenu
            ref="menu"
            :tag="menuTag"
            @opened="onMenuOpened"
            @keydown.up.down="focusItem"
            v-model:show="isOpened"
            :dark="menuDark"
            :style="{maxHeight:menuHeight}"
            class="w-100 overflow-auto"
            :class="menuClass">
            <li class="px-3">
                <Input :placeholder="searchPlaceholder"
                       ref="search"
                       type="search"
                       tabindex="0"
                       v-model="query"
                       :size="searchSize"
                       :class="searchClass"
                       @update:modelValue="fetchItems"
                       @keyup.up="focusToggleButton"
                />
            </li>
            <li v-for="(item,item_key) in items" :key="item_key" role="menuitem">
                <button @click="onSelected(item)" class="dropdown-item" type="button">
                    <slot :option="item">
                        {{ getOption(item) }}
                    </slot>
                </button>
            </li>
        </DropdownMenu>
    </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, PropType, ref, Ref, useSlots, watch} from "vue";
import type {ButtonSizes, TextAlign} from "../../types";
import {Input, DropdownMenu, InputGroup} from "../../";
import vOnClickOutside from "../../directives/vOnClickOutside";
import axios from "axios";
import usePopper from "../../composables/usePopper";
import {makeBoolean, makeProp, makeSize, makeString, makeTag, makeVariant} from "../../composables/useProps";

const props = defineProps({
    apiUrl: makeString(null),
    queryKey: makeString('query'),
    getItems: {
        //sending refs, so that can be modified from outside
        type: Function as PropType<(items: Ref<unknown>, query: Ref<string | number | null>) => unknown>,
    },
    menuHeight: makeString("250px"),
    searchSize: makeSize<ButtonSizes>("sm"),
    searchClass: {default: null},
    toggleSize: makeSize<ButtonSizes>(null),
    toggleClass: {default: null},
    menuClass: {default: null},
    menuDark: makeBoolean(false),
    menuTag: makeTag("ul"),
    searchPlaceholder: makeString("Search..."),
    modelValue: {default: null},
    variant: makeVariant("secondary"),
    textAlign: makeProp<TextAlign>('start', String),
    getLabel: {
        type: Function as PropType<(item: unknown) => unknown>,
        default: (item: unknown) => item ? item : "Not Selected"
    },
    getOption: {
        type: Function as PropType<(item: unknown) => unknown>,
        default: (item: unknown) => item
    },
    noCloseOnOutsideClick: makeBoolean(false),
    noCloseOnItemSelect: makeBoolean(false),
    noCloseOnEscPressed: makeBoolean(false),
    clearItemsOnSelect: makeBoolean(false),
    preload: makeBoolean(false)
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'selected', value: any): void
    (e: 'onBeforeOpen', value: any): void
    (e: 'onBeforeClose', value: any): void
}>();


const query = ref<string | number>();
const items = ref<any[]>([]);
const toggle_btn = ref<HTMLButtonElement>(null);
const menu = ref<InstanceType<typeof DropdownMenu>>(null);
const isOpened = ref<boolean>(false);
const search = ref<InstanceType<typeof Input> | null>(null);

const {update} = usePopper(toggle_btn, menu, ref({}), isOpened);


function fetchItems() {
    if (props.apiUrl) {
        let url = new URL(props.apiUrl);
        if (query.value) {
            url.searchParams.set(props.queryKey, query.value.toString());
        }
        return axios.get(url.href).then(res => {
            items.value = res.data;
            return res.data;
        }).catch(err => {
            items.value = [];
            return [];
        });
    } else {
        return props.getItems(items, query);
    }
}

const slots = useSlots();
const toggleClasses = computed(() => [
    "form-select",
    {
        ["form-select-" + props.toggleSize]: props.toggleSize,
        ["text-" + props.textAlign]: props.textAlign,
        "border-0": slots.append || slots.prepend
    },
    props.toggleClass
]);

const classes = computed(() => [
    "dropdown", {
        "form-control p-0": slots.append || slots.prepend,
    }
]);

function onMenuOpened() {
    nextTick(() => search.value?.$el.focus())
}

const selectedItem = ref<any>(null)

function onSelected(item) {
    emit("update:modelValue", item);
    emit("selected", item);
    selectedItem.value = item;
    if (!props.noCloseOnItemSelect) {
        close();
    }
    if (props.clearItemsOnSelect) {
        items.value = [];
    }
}

function onClickOutside() {
    if (!props.noCloseOnOutsideClick) {
        close();
    }
}

function onEscPressed() {
    if (!props.noCloseOnEscPressed) {
        close();
    }
}

onMounted(() => {
    if (props.modelValue) {
        selectedItem.value = props.modelValue;
    }
    if (props.preload) {
        fetchItems();
    }
});

watch(() => props.modelValue, value => {
    selectedItem.value = value;
});


function focusToggleButton() {
    toggle_btn.value?.focus();
}

function toggle() {
    if (isOpened.value) {
        close();
    } else {
        open();
    }
}

function open() {
    emit("onBeforeOpen", selectedItem.value);
    nextTick(() => {
        isOpened.value = true;
        update();
    });
}

function close() {
    emit("onBeforeClose", selectedItem.value);
    nextTick(() => isOpened.value = false);
}

function focusItem(e) {
    if (e.code === "ArrowDown" && (e.target.nodeName === "BUTTON" || e.target.nodeName === "INPUT")) {
        let nextEL = e.target.parentNode.nextElementSibling;
        (nextEL?.querySelector("button") || nextEL?.querySelector("input"))?.focus();
    } else if (e.code === "ArrowUp" && (e.target.nodeName === "BUTTON" || e.target.nodeName === "INPUT")) {
        let prevEl = e.target.parentNode.previousElementSibling;
        (prevEl?.querySelector("button") || prevEl?.querySelector("input"))?.focus();
    }
}

</script>
