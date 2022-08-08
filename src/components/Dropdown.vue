<template>
    <component :is="tag" :class="classes" ref="target">
        <Button
            v-if="split"
            :disabled="disabled"
            :variant="splitVariant"
            :block="block"
            :size="size">
            <slot name="button-content">
                {{ text }}
            </slot>
        </Button>
        <NavLink v-if="isNav"
                 ref="toggle"
                 class="dropdown-toggle"
                 role="button"
                 @click="shouldOpen=!shouldOpen">
            {{ text }}
        </NavLink>
        <Button
            v-else
            ref="toggle"
            :tag="toggleTag"
            :block="block"
            :disabled="disabled"
            :variant="variant"
            :size="size"
            class="dropdown-toggle"
            :class="{'show':shouldOpen,'dropdown-toggle-split':split}"
            @click="shouldOpen=!shouldOpen"
            :aria-expanded="toggleAriaExpanded">
            <slot name="button-content">
                <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                <template v-else>{{ text }}</template>
            </slot>
        </Button>
        <DropdownMenu
            @click="menuItemClicked"
            ref="menu"
            :show="shouldOpen"
            :tag="menuTag"
            :class="menuClass"
            :dark="menuDark">
            <slot></slot>
        </DropdownMenu>
    </component>
</template>

<script lang="ts" setup>
import dropdownProps from "../shared/dropdownProps";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu.vue";
import {computed, defineProps, ref, watch} from "vue";
import NavLink from "./NavLink.vue";
import usePopper from "../shared/usePopper";
import {onClickOutside} from "@vueuse/core";

const props = defineProps(dropdownProps);
const shouldOpen = ref<boolean>(false);

const target = ref<HTMLElement | null>(null);
const toggle = ref<InstanceType<typeof Button> | null>(null);
const menu = ref<InstanceType<typeof DropdownMenu> | null>(null);

const toggleAriaExpanded = ref<boolean>(false);

onClickOutside(target, () => shouldOpen.value = false);

const options = computed(() => ({
    placement: props.align ? [props.dir, props.align].join("-") : "bottom-start"
}));

const {update} = usePopper(toggle, menu, options, shouldOpen);

watch(shouldOpen, value => toggleAriaExpanded.value = value);

const classes = computed(() => ({
    "btn-group": !props.block && !props.isNav,
    "dropdown": props.block || props.isNav,
    "dropend": props.dir === "right",
    "dropstart": props.dir === "left",
    "dropup": props.dir === "top",
}));

function menuItemClicked(e) {
    if (!props.disableInnerClicks && shouldOpen.value) {
        if (menu.value?.$el?.contains(e.target)) {
            shouldOpen.value = false;
        }
    }
}
</script>