<template>
    <div :class="classes"
         ref="theRoot"
         role="tabpanel"
         tabindex="0">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, inject, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {getTransitionDurationFromElement, makeBoolean, makeString} from "@/composables";
import {registerTabType, unregisterTabType} from "./index";

const props = defineProps({
    active: makeBoolean(false),
    title: makeString()
});

const emit = defineEmits<{
    (e: 'update:active', value: boolean): void
}>();

/**
 * This state is handled by parent Component Tabs.
 * Which is done by updateVisibility method.
 */
const visible = ref<boolean>(props.active);
const theRoot = ref<HTMLElement>();

watch(visible, value => {
    if (!theRoot?.value) {
        return;
    }

    emit("update:active", value);
    if (value) {
        /**
         * @link https://github.com/twbs/bootstrap/blob/main/js/src/tab.js#L111-L126
         */
        states.active = true;
        states.ariaSelected = true;
        states.tabindex = null;

        setTimeout(
            () => states.show = true,
            getTransitionDurationFromElement(theRoot.value)
        );
    } else {
        /**
         * First Active class is removed
         * @link https://github.com/twbs/bootstrap/blob/main/js/src/tab.js#L133
         */
        states.active = false;
        theRoot.value?.blur();

        setTimeout(() => {
            states.show = false;
            states.ariaSelected = false;
            states.tabindex = -1;
        }, getTransitionDurationFromElement(theRoot.value));
    }
});

/**
 * Tab Class states
 */
const states = reactive<{
    active: boolean,
    show: boolean,
    ariaSelected: boolean | null,
    tabindex: number | null
}>({
    active: props.active,
    show: props.active,
    ariaSelected: props.active,
    tabindex: props.active ? null : -1,
});

const classes = computed(() => [
    "tab-pane", "fade", {
        "show": states.show,
        "active": states.active,
        "card-body": isCardTabs.value
    }
]);


//injections
const registerTab = inject('registerTab') as registerTabType;
const unregisterTab = inject('unregisterTab') as unregisterTabType;

//when parent Tabs component has card prop set to true
const isCardTabs = inject('isCardTabs') as { value: boolean };

registerTab({
    uid: getCurrentInstance()?.uid,
    updateVisibility: (value: boolean) => visible.value = value,
    title: props.title,
    states: states
});

//unsubscribe from parent tabs
onBeforeUnmount(() => unregisterTab(getCurrentInstance()?.uid));

</script>