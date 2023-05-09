<template>
    <DropdownSkeleton
            v-model="isMenuOpened"
            :class="classes"
            ref="skeleton"
            :popper-options="popperOptions">
        <template #toggle="{onclickToggle}">
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
                     :class="{show:isMenuOpened}"
                     role="button"
                     @click="onclickToggle">
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
                    @click="onclickToggle"
                    :aria-expanded="isMenuOpened">
                <slot name="button-content">
                    <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                    <template v-else>{{ text }}</template>
                </slot>
            </Button>
        </template>
        <DropdownMenu ref="menu" :show="isMenuOpened">
            <slot/>
        </DropdownMenu>
    </DropdownSkeleton>
</template>
<script lang="ts" setup>

import DropdownSkeleton from "../Internal/DropdownSkeleton.vue";
import DropdownMenu from "./DropdownMenu.vue";
import {Button} from "../../index";
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {ButtonSizes, ColorVariants, DropdownAlignments, DropdownDirections} from "../../types";
import usePopper from "../../composables/usePopper";
import NavLink from "../Navigation/NavLink.vue";

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
    dir: "bottom"
});

const isMenuOpened = ref<boolean>(false);

const classes = computed(() => ({
    "btn-group": !props.block && !props.isNav,
    "dropdown": props.block || props.isNav,
    "dropend": props.dir === "right",
    "dropstart": props.dir === "left",
    "dropup": props.dir === "top",
}));

const popperOptions = computed(() => ({
    placement: props.align ? [props.dir, props.align].join("-") : "bottom-start"
}));

const skeleton = ref<InstanceType<typeof DropdownSkeleton> | null>(null);
const toggle = ref<InstanceType<typeof Button> | null>(null);
const menu = ref<InstanceType<typeof DropdownMenu> | null>(null);

const {setOptions} = usePopper(toggle, menu, popperOptions, isMenuOpened);

watch(() => popperOptions, options => setOptions(options));

function DdItemHandler(e) {
    if (e.target?.classList.contains('dropdown-item')) {
        isMenuOpened.value = false;
    }
}

onMounted(() => {
    skeleton.value.$el?.addEventListener("click", DdItemHandler)
});

onBeforeUnmount(() => {
    skeleton.value.$el?.removeEventListener("click", DdItemHandler)
});
</script>