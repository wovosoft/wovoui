<template>
    <component :is="tag" ref="target">
        <component :is="toggleTag" :class="toggleClass" ref="toggle" @click="toggleMenu" style="cursor: pointer;">
            <slot name="toggle"
                  :toggleMenu="toggleMenu"
                  :isShown="isShown"
            />
        </component>
        <!--Menu-->
        <component :is="menuTag" :class="getMenuClass" ref="menu">
            <slot/>
        </component>
    </component>
</template>

<script lang="ts" setup>
import {computed, PropType, Ref, ref, watch} from "vue";
import usePopper from "../shared/usePopper";
import {onClickOutside} from "@vueuse/core";

const props = defineProps({
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
    toggleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
    menuTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: 'div'},
    menuClass: {default: null},
    toggleClass: {default: null},
    activatorClass: {default: 'show'},
    modelValue: {type: Boolean as PropType<boolean>, default: false}
});

const isShown = ref<boolean>(false);
watch(() => props.modelValue, value => {
    if (value) {
        show();
    } else {
        hide();
    }
});


const emit = defineEmits<{
    (e: 'toggleMenu', value: Ref<boolean>): void;
    (e: 'update:modelValue', value: boolean): void;
}>();

function toggleMenu() {
    isShown.value = !isShown.value;
    emit("toggleMenu", isShown);
    emit("update:modelValue", isShown.value);
}

const getMenuClass = computed(() => [
    props.menuClass, {
        [props.activatorClass]: isShown.value
    }
]);


const target = ref<HTMLElement | null>(null);
const toggle = ref<HTMLElement | null>(null);
const menu = ref<HTMLElement | null>(null);
const {update} = usePopper(toggle, menu, null, isShown);

function show() {
    //this should update isShown when initialized
    emit('update:modelValue', true);
    //condition prevents double setting value
    if (isShown.value != true) {
        isShown.value = true;
    }
}

function hide() {
    //this should update isShown when initialized
    emit('update:modelValue', false);
    //condition prevents double setting value
    if (isShown.value != false) {
        isShown.value = false;
    }
}

onClickOutside(target, () => {
    hide();
    update();
});
</script>
