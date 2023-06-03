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
const visible = ref(props.active);
const theRoot = ref<HTMLElement>();

watch(visible, value => {
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

//injections
const registerTab = inject<(tab) => void>('registerTab');
const unregisterTab = inject<(tab) => void>('unregisterTab');
//when parent Tabs component has card prop set to true
const isCardTabs = inject('isCardTabs') as { value: boolean };

//provided to parent
const updateVisibility = (value) => visible.value = value;

//subscribe to parent tabs
onMounted(() => {
    states.active = props.active;
    states.show = props.active;
    states.ariaSelected = props.active;
    states.tabindex = props.active ? null : -1;

    registerTab({
        uid: getCurrentInstance().uid,
        updateVisibility,
        title: props.title,
        visible,
        states
    });
});

//unsubscribe from parent tabs
onBeforeUnmount(() => unregisterTab(getCurrentInstance().uid));

/**
 * Tab Class states
 */
const states = reactive({
    active: false,
    show: false,
    ariaSelected: null,
    tabindex: null,
});

const classes = computed(() => [
    "tab-pane", "fade", {
        "show": states.show,
        "active": states.active,
        "card-body": isCardTabs.value
    }
]);
</script>