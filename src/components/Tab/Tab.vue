<template>
    <div :class="classes"
         ref="theRoot"
         role="tabpanel"
         tabindex="0">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance, inject, onBeforeUnmount, reactive, ref, useModel, watch} from "vue";
import {getTransitionDurationFromElement} from "@/composables";
import {registerTabInjection, TabProps, unregisterTabInjection} from "./index";

const props = withDefaults(defineProps<TabProps>(), {
    active: false,
});

/**
 * This state is handled by parent Component Tabs.
 * Which is done by updateVisibility method.
 */
const visible = useModel(props, 'active');
const theRoot = ref<HTMLElement>();

watch(visible, value => {
    if (!theRoot?.value) {
        return;
    }

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
const registerTab = inject(registerTabInjection);
const unregisterTab = inject(unregisterTabInjection);

//when parent Tabs component has card prop set to true
const isCardTabs = inject('isCardTabs') as { value: boolean };

if (registerTab) {
    registerTab({
        uid: getCurrentInstance()?.uid,
        updateVisibility: (value: boolean) => visible.value = value,
        title: props.title,
        visible: visible.value,
        states: states
    });
}

//unsubscribe from parent tabs
if (unregisterTab) {
    onBeforeUnmount(() => unregisterTab(getCurrentInstance()?.uid));
}

</script>