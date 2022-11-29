<template>
    <component :is="tag" v-on-click-outside="hide">
        <component :is="toggleTag" :class="toggleClass" ref="toggle" @click="toggleClickedInternally"
                   style="cursor: pointer;">
            <slot name="toggle"
                  :toggleMenu="toggleMenu"
                  :isShown="isShown"
            />
        </component>
        <!--Menu-->
        <component :is="menuTag"
                   @keydown.esc="onEsc"
                   :class="getMenuClass"
                   ref="menu"
                   :tabindex="isShown?1:null">
            <slot/>
        </component>
    </component>
</template>

<script lang="ts" setup>
import {computed, nextTick, PropType, Ref, ref, useSlots, watch} from "vue";
import usePopper from "../../composables/usePopper";
import {vOnClickOutside} from "../../directives";
import type {DropdownMenu} from "../../index";
import {unrefElement} from "@vueuse/core";
import {makeBoolean, makeTag} from "../../composables/useProps";

const props = defineProps({
    tag: makeTag("div"),
    toggleTag: makeTag("div"),
    menuTag: {
        type: [String, Object] as PropType<keyof HTMLElementTagNameMap | InstanceType<typeof DropdownMenu>>,
        default: 'div'
    },
    menuClass: {default: null},
    toggleClass: {default: null},
    activatorClass: {default: 'show'},
    modelValue: makeBoolean(false),
    popperOptions: {default: null},
    noCloseOnEsc: makeBoolean(false),
});

const emit = defineEmits<{
    (e: 'toggleMenu', value: Ref<boolean>): void;
    (e: 'update:modelValue', value: boolean): void;
}>();

const isShown = ref<boolean>(false);
watch(() => props.modelValue, value => (value ? show : hide)());


const getMenuClass = computed(() => [
    props.menuClass, {
        [props.activatorClass]: isShown.value
    }
]);

const toggle = ref<HTMLElement | null>(null);
const menu = ref<HTMLElement | null>(null);
const theOptions = ref(props.popperOptions);
const {setOptions} = usePopper(toggle, menu, theOptions, isShown);

watch(() => props.popperOptions, options => setOptions(options));

const mayBeTriEl = ref();

function show() {
    mayBeTriEl.value = document.activeElement;
    //condition prevents double setting value
    if (isShown.value != true) {
        isShown.value = true;
    }
    //this should update isShown when initialized
    emit('update:modelValue', true);
    nextTick(() => unrefElement(menu.value)?.focus())
}

function hide() {
    //this should update isShown when initialized
    emit('update:modelValue', false);
    //condition prevents double setting value
    if (isShown.value != false) {
        isShown.value = false;
    }
    mayBeTriEl.value?.focus();
    mayBeTriEl.value = null;
}


function toggleMenu() {
    (isShown.value ? hide : show)()
    emit("toggleMenu", isShown);
}

const slots = useSlots();

/**
 * The slots[toggle] outer content should call toggleMenu.
 * When slots[toggle] is not provided, only then this method should call toggleMenu
 */
function toggleClickedInternally() {
    if (!slots.toggle) {
        toggleMenu();
    }
}

function onEsc(e) {
    if (!props.noCloseOnEsc && !e.defaultPrevented) {
        hide();
    }
}
</script>
