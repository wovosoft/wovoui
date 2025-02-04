<template>
    <div :class="classes" class="position-relative" @keyup.esc="onEscPressed" v-on-click-outside="onClickOutside">
        <InputGroup :size="toggleSize">
            <slot name="prepend"></slot>
            <component
                :is="toggleTag"
                :class="toggleClasses"
                ref="toggle_btn"
                type="button"
                @click="toggle"
                @keyup.down="()=>isOpened=true"
                :aria-expanded="isOpened">
                <slot name="label" :selectedItem="selectedItem">
                    {{ getLabel(selectedItem) }}
                </slot>
            </component>
            <slot name="append"></slot>
        </InputGroup>
        <DropdownMenu
            ref="menu"
            :tag="menuTag"
            @opened="onMenuOpened"
            @keydown.up.down="focusItem"
            v-model:show="isOpened"
            :dark="menuDark"
            v-bind="menuAttrs"
            class="w-100 overflow-auto"
            :class="menuClass">
            <div class="px-3">
                <Input :placeholder="searchPlaceholder"
                       ref="search"
                       type="search"
                       tabindex="0"
                       v-model="query"
                       :size="searchSize"
                       :class="searchClass"
                       @update:modelValue="fetchItems"
                />
            </div>
            <div ref="menuItems" :style="{maxHeight:menuHeight}" class="overflow-auto">
                <button v-for="(item,item_key) in items"
                        :key="item_key"
                        role="menuitem"
                        @click="onSelected(item)"
                        class="dropdown-item"
                        type="button">
                    <slot :option="item">
                        {{ getOption(item) }}
                    </slot>
                </button>
            </div>
        </DropdownMenu>
    </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref, useSlots, watch} from "vue";
import type {TypeHeadProps} from "@/index";
import {DropdownMenu, Input, InputGroup} from "@/components";
import {vOnClickOutside} from "@/directives";
import axios from "axios";
import usePopper from "@/composables/usePopper";
import {SetupContext} from "@vue/runtime-core";

const props = withDefaults(defineProps<TypeHeadProps>(), {
    queryKey: 'query',
    menuHeight: '250px',
    searchSize: 'sm',
    toggleTag: "button",
    menuTag: "div",
    searchPlaceholder: "Search...",
    variant: "secondary",
    textAlign: 'start',
    getLabel: (item: any) => item ? item : "Not Selected",
    getOption: (item: any) => item,
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
    (e: 'selected', value: any): void
    (e: 'onBeforeOpen', value: any): void
    (e: 'onBeforeClose', value: any): void
}>();

defineExpose({
    clearItems: () => items.value = [],
    setItems: (data: any) => items.value = data,
    fetchItems,
    clearQueryString: () => query.value = null,
    setQueryString: (value: string) => query.value = value
});

const query = ref<string | number | null>();
const items = ref<any[]>([]);
const toggle_btn = ref<HTMLButtonElement>();
const menu = ref<InstanceType<typeof DropdownMenu>>();
const menuItems = ref<HTMLDivElement>();
const isOpened = ref<boolean>(false);
const search = ref<InstanceType<typeof Input> | null>(null);

const {update} = usePopper(toggle_btn, menu, ref({}), isOpened);

function fetchItems() {
    if (props.apiUrl) {
        let url = new URL(props.apiUrl);
        if (query.value) {
            url.searchParams.set(props.queryKey, query.value?.toString());
        }
        return axios.get(url.href).then(res => {
            items.value = res.data;
            return res.data;
        }).catch(err => {
            items.value = [];
            return [];
        });
    } else {
        if (typeof props.getItems == 'function') {
            return props.getItems(items, query);
        }

        return [];
    }
}

const slots: SetupContext['slots'] = useSlots();

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
    nextTick(() => search.value?.$el?.focus())
}

const selectedItem = ref<any>(null)

function onSelected(item: any) {
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


function focusItem(e: KeyboardEvent & { target: HTMLElement }) {
    if (e.code === "ArrowDown") {
        if (e.target?.isEqualNode(search.value?.$el as Node)) {
            (menuItems.value?.firstElementChild as HTMLButtonElement)?.focus();
        } else {
            (e.target?.nextElementSibling as HTMLButtonElement)?.focus();
        }
    } else if (e.code === "ArrowUp") {
        if ((e.target.previousElementSibling as HTMLButtonElement)) {
            (e.target.previousElementSibling as HTMLButtonElement)?.focus();
        } else {
            search.value?.$el?.focus();
        }
    }

    menuItems.value?.scrollIntoView();
}
</script>
