<template>
    <DropdownSkeleton
        :show="isMenuOpened"
        :menu-tag="DropdownMenu"
        :menu-class="menuClass"
        :dark="menuDark"
        :popper-options="popperOptions"
        v-model="isMenuOpened"
        :class="classes">
        <template #toggle="{toggleMenu}">
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
                     @click="toggleMenu()">
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
                :class="{'show':isMenuOpened,'dropdown-toggle-split':split}"
                @click="toggleMenu()"
                :aria-expanded="isMenuOpened">
                <slot name="button-content">
                    <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                    <template v-else>{{ text }}</template>
                </slot>
            </Button>
        </template>
        <slot></slot>
    </DropdownSkeleton>
</template>
<script lang="ts" setup>

import DropdownSkeleton from "../Internal/DropdownSkeleton.vue";
import {computed, ref} from "vue";

import {Button, NavLink, DropdownMenu} from "../..";
import type {ButtonSizes, DropdownAlignments, DropdownDirections, ColorVariants} from "../../types";

type DropdownType = {
    tag?: keyof HTMLElementTagNameMap,
    menuTag?: keyof HTMLElementTagNameMap,
    toggleTag?: keyof HTMLElementTagNameMap,
    size?: ButtonSizes | null,
    text?: string | null,
    variant?: ColorVariants,
    splitVariant?: ColorVariants,
    block?: boolean,
    disabled?: boolean,
    /**
     * left,right,up, down=null (default)
     */
    dir?: DropdownDirections | null,
    align?: DropdownAlignments,
    menuDark?: boolean,
    menuClass?: string | object | any[] | null,

    split?: boolean,
    isNav?: boolean,
    disableInnerClicks?: boolean,
}

const props = withDefaults(defineProps<DropdownType>(), {
    tag: "div",
    menuTag: "ul",
    toggleTag: "button",
    variant: "secondary",
    splitVariant: "secondary",
    align: "start",
});

const isMenuOpened = ref<boolean>(false);

const classes = computed(() => ({
    "btn-group": !props.block && !props.isNav,
    "dropdown": props.block || props.isNav,
    "dropend": props.dir === "right",
    "dropstart": props.dir === "left",
    "dropup": props.dir === "top",
}));

const popperOptions = computed(() =>({
    placement: props.align ? [props.dir, props.align].join("-") : "bottom-start"
}));

</script>