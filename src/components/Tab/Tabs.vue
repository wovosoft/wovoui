<template>
    <div :class="classes">
        <TabContent v-if="end" :class="contentClass">
            <slot/>
        </TabContent>
        <div :class="{'card-header':card, headerClass}">
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
                    :active="tab_index===active"
                    :aria-selected="tab.states?.ariaSelected"
                    :tabindex="tab.states?.tabindex"
                    @click="showTab(tab_index)"
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


import {computed, onMounted, provide, ref, watch} from "vue";
import {
    Nav,
    NavLink,
    registerTabInjection,
    TabContent,
    TabMapItem,
    TabsProps,
    unregisterTabInjection
} from "@/components";

const props = withDefaults(defineProps<TabsProps>(), {
    modelValue: 0,
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: number | null | undefined): void
}>();


const active = defineModel<number>('modelValue');

onMounted(() => showTab(Number(active.value)));

watch(active, () => showTab(Number(active.value)));

function showTab(index: number) {
    emit('update:modelValue', index);

    // Find visible tabs and then hide. Theoretically, there should have only one visible tab in a
    // certain tabs. But if there are multiple tab items,
    // we do the following actions to perform everything properly
    // without any risk
    tabsMap.value
        .filter(tab => tab.states?.active)
        .forEach(tab => {
            if (typeof tab.updateVisibility === 'function') {
                tab?.updateVisibility(false);
            }
        });

    //show target tab
    tabsMap.value[index]?.updateVisibility(true);
}

const classes = computed(() => ({
    card: props.card,
    'd-flex': props.vertical,
    'align-items-start': props.vertical
}));


/**
 * Records of subscribed child tabs
 */
const tabsMap = ref<TabMapItem[]>([]);

/**
 * Provide Method to Child method to be subscribed as tab
 */
provide(registerTabInjection, (tab) => tabsMap.value.push(tab));

/**
 * Provide Method to Child method to be unsubscribed as tab
 */
provide(unregisterTabInjection, (uid) => {
    let index = tabsMap.value.findIndex(t => t.uid === uid);
    if (index > -1) {
        tabsMap.value.splice(index, 1);
    }
});

/**
 * Usually, the card prop should be constant in most scenario,
 * but sometimes, it might be different, so computed value is
 * a better approach.
 */
provide("isCardTabs", computed(() => props.card))
</script>