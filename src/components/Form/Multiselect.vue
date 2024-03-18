<template>
    <div ref="root" class="dropdown wui-multiselect" @keydown.esc="opened=false;toggle?.focus()">
        <InputGroup class="input-group" :size="toggleSize">
            <button ref="toggle"
                    class="dropdown-toggle form-control text-start"
                    @keydown.down="()=>{if (!opened) {opened=true} }"
                    @click="opened=!opened">
                <slot name="label" :selectedOptions="model">
                    {{ model.length }} Options Selected
                </slot>
            </button>
            <Button @click="reset" v-if="!disableReset">
                <slot name="reset">
                    <Trash/>
                    {{ resetTitle }}
                </slot>
            </Button>
        </InputGroup>
        <DropdownMenu
            @keydown.up.down="navigateItem"
            :show="opened"
            style="max-height: 250px;" class="overflow-auto w-100">
            <li class="px-3">
                <Input
                    :placeholder="searchPlaceholder"
                    ref="search"
                    type="search"
                    tabindex="0"
                    v-model="query"
                    :size="searchSize"
                />
            </li>
            <li v-for="(item,item_key) in items" :key="item_key" role="menuitem">
                <label class="dropdown-item"
                       :tabindex="opened?-1:null"
                       @keydown.space.enter.prevent="itemClicked($event,item)">
                    <input
                        v-model="model"
                        :value="item"
                        type="checkbox"
                        class="form-check-input me-1"
                    />
                    <slot :option="item">
                        {{ item }}
                    </slot>
                </label>
            </li>
        </DropdownMenu>
    </div>
</template>

<script lang="ts" setup>
import {nextTick, onBeforeUnmount, ref, watch} from "vue";
import {Trash} from "@wovosoft/wovoui-icons";
import {Button, DropdownMenu, Input, InputGroup, MultiselectProps} from "@/components";

const emit = defineEmits(["update:query", "update:modelValue", 'selectedOption']);

const props = withDefaults(defineProps<MultiselectProps>(), {
    searchSize: 'sm',
    toggleSize: 'sm',
    searchPlaceholder: 'Search...',
});

const model = defineModel<any[]>();

const query = ref<string | null>(null);
const items = ref<any[]>([]);
const opened = ref<boolean>(false);

/**
 * Controls
 */
const root = ref<HTMLElement | null>(null);
const search = ref<InstanceType<typeof Input> | null>(null);
const toggle = ref<HTMLButtonElement | null>(null);

watch(opened, shown => {
    if (shown) {
        nextTick(() => {
            search.value?.$el.focus();
            //attach outside click handler
            document.addEventListener("click", clickOutsideHandler);
        });
    } else {
        //no need outside click handler when dropdown not opened
        document.removeEventListener("click", clickOutsideHandler);
    }
});

/**
 * Watch query and search while changes. debounce can be added later
 */

watch(query, value => {
    props.getItems(items, value);
});

/**
 * Attach Outside click listener onMounted
 */
const clickOutsideHandler = (e: Event): void => {
    if (opened.value && !root.value?.contains(<Node>e.target)) {
        opened.value = false;
    }
};

/**
 * Before unmounting component, detaching the outside click handler
 */
onBeforeUnmount(() => {
    document.removeEventListener("click", clickOutsideHandler);
});

/**
 * arrow  navigation
 */

const navigateItem = (e) => {
    let element = null;
    if (e.code === "ArrowDown" && (e.target.nodeName === "LABEL" || e.target.nodeName === "INPUT")) {
        element = e.target.parentNode.nextElementSibling;
    } else if (e.code === "ArrowUp" && (e.target.nodeName === "LABEL" || e.target.nodeName === "INPUT")) {
        element = e.target.parentNode.previousElementSibling;
    }

    if (element) {
        (element.querySelector("label") || element.querySelector("input"))?.focus();
    }
};

const itemClicked = (e, item) => {
    if (model.value.includes(item)) {
        let index = model.value.indexOf(item);
        model.value.splice(index, 1);
    } else {
        model.value.push(item);
    }
};

/**
 * Expose control methods
 */
const reset = () => model.value = [];
defineExpose({
    reset
});
</script>

<style lang="scss">
.wui-multiselect {
    .dropdown-toggle::after {
        float: right;
        margin-top: 10px;
    }
}
</style>