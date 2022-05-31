<template>
    <div ref="root" class="dropdown" @keydown.esc="dropdownShown=false;$refs.toggle?.focus()">
        <button :class="classes"
                ref="toggle"
                type="button"
                @keydown.down="()=>{if (!dropdownShown) openDropdown() }"
                @click="openDropdown"
                :aria-expanded="dropdownShown">
            <slot name="label" :selectedItem="selectedItem">
                {{ getLabel(selectedItem) }}
            </slot>
        </button>
        <DropdownMenu
            ref="menu"
            :tag="menuTag"
            v-model:show="dropdownShown"
            @keydown.up.down="focusItem"
            :dark="menuDark"
            :style="{maxHeight:menuHeight}"
            class="overflow-auto w-100">
            <li class="px-3">
                <Input :placeholder="searchPlaceholder"
                       ref="search"
                       type="search"
                       tabindex="0"
                       v-model="query"
                       :size="searchSize"
                />
            </li>
            <li v-for="(item,item_key) in items" :key="item_key" role="menuitem">
                <button @click="selected(item)" class="dropdown-item" type="button">
                    <slot :option="item">
                        {{ getOption(item) }}
                    </slot>
                </button>
            </li>
        </DropdownMenu>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onBeforeUnmount, PropType, Ref, ref, watch, computed} from "vue";
import type {buttonSizes} from "../types/buttonSizes";
import Button from "./Button";
import Input from "./Input.vue";
import DropdownMenu from "./DropdownMenu.vue";
import type {ColorVariants} from "../types/colorVariants";
import type {TextAlign} from "../types/TextAlign";
import {createPopper} from "@popperjs/core";

export default defineComponent({
    name: "TypeHead",
    components: {DropdownMenu, Input, Button},
    emits: ['update:modelValue', 'selected'],
    props: {
        apiUrl: {type: String as PropType<string>, default: null},
        lazy: {type: Boolean as PropType<boolean>, default: true},
        getItems: {
            //sending refs, so that can be modified from outside
            type: Function as PropType<(items: Ref<unknown>, query: Ref<string | number | null>) => unknown>,
            required: true
        },
        menuHeight: {type: String as PropType<string>, default: "250px"},
        searchSize: {type: String as PropType<buttonSizes>, default: "sm"},
        toggleSize: {type: String as PropType<buttonSizes>, default: "sm"},
        menuDark: {type: Boolean as PropType<boolean>, default: false},
        menuTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "ul"},
        searchPlaceholder: {type: String as PropType<string>, default: "Search..."},
        modelValue: {default: null},
        variant: {type: String as PropType<ColorVariants>, default: "secondary"},
        textAlign: {type: String as PropType<TextAlign>, default: 'start'},
        getLabel: {
            type: Function as PropType<(item: unknown) => unknown>,
            default: (item: unknown) => item ? item : "Not Selected"
        },
        getOption: {
            type: Function as PropType<(item: unknown) => unknown>,
            default: (item: unknown) => item
        }
    },
    setup(props, {emit}) {
        const items = ref<unknown[]>([]);
        const query = ref<string | number | null>(null);
        const dropdownShown = ref<boolean>(false);

        const selectedItem = ref<unknown>(props.modelValue);

        /**
         * This watches changes from outside also
         */
        watch(selectedItem, value => emit('update:modelValue', value));
        watch(() => props.modelValue, value => selectedItem.value = value);

        watch(query, value => {
            props.getItems(items, query);
        })

        const root = ref<HTMLElement | null>(null);
        const search = ref<InstanceType<typeof Input> | null>(null);
        const toggle = ref<HTMLElement | null>(null);
        const menu = ref<InstanceType<typeof DropdownMenu> | null>(null);


        const outsideClickHandler = (e): void => {
            /**
             * If clicked outside of the root, dismiss the dropdown menu
             */
            if (dropdownShown.value && !root.value?.contains(e.target)) {
                dropdownShown.value = false;
            }
        }

        watch(dropdownShown, (shown: boolean) => {
            if (shown) {
                document.addEventListener("click", outsideClickHandler);
            } else {
                document.removeEventListener("click", outsideClickHandler);
            }
        });

        const popperOptions = computed(() => ({
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 5],
                    },
                },
            ],
        }));

        let popperInstance = null;
        onMounted(() => {
            if (!props.lazy) {
                props.getItems(items, query);
            }
            popperInstance = createPopper(
                toggle.value,
                menu.value?.$el,
                popperOptions.value
            )
        });

        /**
         * When component is not live, we do not need this event on main document.
         * So just remove it.
         */
        onBeforeUnmount(() => {
            document.removeEventListener("click", outsideClickHandler);
        })

        return {
            query,
            root,
            search,
            toggle,
            menu,

            dropdownShown,
            items,
            selectedItem,
            focusItem(e) {
                if (e.code === "ArrowDown" && (e.target.nodeName === "BUTTON" || e.target.nodeName === "INPUT")) {
                    let nextEL = e.target.parentNode.nextElementSibling;
                    (nextEL?.querySelector("button") || nextEL?.querySelector("input"))?.focus();
                } else if (e.code === "ArrowUp" && (e.target.nodeName === "BUTTON" || e.target.nodeName === "INPUT")) {
                    let prevEl = e.target.parentNode.previousElementSibling;
                    (prevEl?.querySelector("button") || prevEl?.querySelector("input"))?.focus();
                }
            },
            selected(item: unknown) {
                selectedItem.value = item;
                dropdownShown.value = false;
            },
            openDropdown() {
                dropdownShown.value = !dropdownShown.value;
                if (dropdownShown.value) {
                    setTimeout(() => {
                        search.value?.$el.focus();
                        popperInstance?.update();
                    }, 0);
                }
            },
            classes: computed(() => ([
                "form-select",
                "w-100",
                {
                    ["form-select-" + props.toggleSize]: props.toggleSize,
                    ["text-" + props.textAlign]: props.textAlign
                }
            ])),
            popperOptions
        }
    }
})
</script>
