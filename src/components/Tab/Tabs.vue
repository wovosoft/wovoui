<template>
    <div :class="classes">
        <TabContent v-if="end" :class="contentClass">
            <slot/>
        </TabContent>
        <div :class="{'card-header':card, ...headerClass}">
            <Nav :tabs="true"
                 :pills="pills"
                 :fill="fill"
                 :justified="justified"
                 :align="align"
                 :vertical="vertical"
                 tag="div"
                 :class="{'card-header-pills':pills,'card-header-tabs':card}">
                <NavLink
                    role="tab"
                    v-for="(tab,tab_index) in tabsMap"
                    :key="tab_index"
                    :active="tab.visible"
                    :aria-selected="tab.states.ariaSelected"
                    :tabindex="tab.states.tabindex"
                    @click="active=tab_index"
                    tag="button">
                    {{ tab.title }}
                </NavLink>
            </Nav>
        </div>
        
        <TabContent v-if="!end" :class="contentClass">
            <slot/>
        </TabContent>
    </div>
</template>

<script lang="ts" setup>
/**
 * When child Tab Component has active prop , and Tabs component has modelValue,
 * modelValue will have higher priority.
 *
 * TODO: #tabs-end, #empty slots needed to be implemented
 * @link https://bootstrap-vue.org/docs/components/tabs#dynamic-tabs--tabs-end-slot
 */


import {computed, onMounted, PropType, provide, Ref, ref, watch} from "vue";
import {Nav, NavLink, TabContent} from "@/components";
import {makeBoolean, makeNumber} from "@/composables";

const props = defineProps({
    /**
     * Index of Active Tab
     * @supported 0 to length of tabs
     */
    modelValue: makeNumber(null),
    
    /**
     * @description defines if the tabs should be styled as card
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/card/#navigation
     */
    card: makeBoolean(false),
    
    /**
     * @description defines if the tabs should be styled as pilled
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#pills
     */
    pills: makeBoolean(false),
    
    /**
     * @description defines if the tabs should fill the whole available width
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    fill: makeBoolean(false),
    
    /**
     * @description defines if the tabs should be justified
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    justified: makeBoolean(false),
    
    /**
     * @description Defines tabs links alignment
     * @default null
     */
    align: {type: String as PropType<'center' | 'end'>, default: null},
    
    /**
     * @description Defines if Tab Menus should be at before or after the content area
     * This feature is not supported by bootstrap yet.
     * So, rendering Menus at the end of the content, won't style it properly.
     * In case when value is true, proper styling actions should be taken.
     * @default false
     */
    end: makeBoolean(false),
    
    /**
     * @description Defines if menu should be vertical or not.
     * When card is enabled, styling doesn't work properly.
     * @default false
     */
    vertical: makeBoolean(false),
    
    /**
     * @type any
     * @default null
     * @description Tab Header Classes
     */
    headerClass: {default: null},
    
    /**
     * @type any
     * @default null
     * @description Tab Content Classes
     */
    contentClass: {default: null}
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>();


const active = ref<number>();
onMounted(() => {
    if (props.modelValue !== null) {
        active.value = props.modelValue;
    } else if (tabsMap.value.length > 0) {
        active.value = tabsMap.value.findIndex(i => i.visible);
    }
});

/**
 * Watchers
 */

watch(() => props.modelValue, value => {
    if (value !== active.value) {
        active.value = value;
    }
});

watch(active, index => {
    emit('update:modelValue', index);
    
    //find visible tabs and then hide. Theoretically, there should have only one visible tab in a
    //certain tabs. But if there are multiple, we do the following actions to perform everything properly
    //without any risk
    tabsMap.value
        .filter(tab => tab.visible)
        .forEach(tab => {
            tab.updateVisibility(false);
        });
    //show target tab
    tabsMap.value[index].updateVisibility(true);
});

const classes = computed(() => ({
    card: props.card,
    'd-flex': props.vertical,
    'align-items-start': props.vertical
}));


type TabMapItem = {
    uid: number;
    updateVisibility: (state: boolean) => void,
    title: string;
    visible: boolean;
    states?: Ref<{
        ariaSelected: boolean;
        tabindex: number | null;
    }>
}

/**
 * Records of subscribed child tabs
 */
const tabsMap = ref<TabMapItem[]>([]);

/**
 * Provide Method to Child method to be subscribed as tab
 */
provide('registerTab', (tab) => tabsMap.value.push(tab));

/**
 * Provide Method to Child method to be unsubscribed as tab
 */
provide('unregisterTab', (uid: number) => {
    let index = tabsMap.value.findIndex(t => t.uid === uid);
    if (index > -1) {
        tabsMap.value.splice(index, 1);
    }
});

/**
 * Usually the card prop should be constant in most scenario,
 * but sometimes, it might be different, so computed value is
 * a better approach.
 */
provide("isCardTabs", computed(() => props.card))
</script>