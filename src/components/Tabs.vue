<template>
    <div :class="classes">
        <div class="tab-content" v-if="end">
            <slot></slot>
        </div>
        <div :class="{'card-header':card}">
            <Nav :tabs="true"
                 :pills="pills"
                 :fill="fill"
                 :justified="justified"
                 :align="align"
                 :vertical="vertical"
                 :class="{'card-header-pills':pills,'card-header-tabs':card}">
                <NavItem
                    role="presentation"
                    v-for="(tab,tab_index) in tabsMap"
                    :key="tab_index"
                    tag="li"
                    :active="tab.visible"
                    @click="active=tab_index"
                    link-tag="button">
                    {{ tab.title }}
                </NavItem>
            </Nav>
        </div>
        <div class="tab-content" v-if="!end">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import {ref, watch, provide, computed, defineComponent, PropType} from "vue";
import Nav from "./Nav";
import NavItem from "./NavItem.vue";

export default defineComponent({
    emits: ['update:modelValue'],
    components: {NavItem, Nav},
    props: {
        modelValue: {type: Number as PropType<number>, default: 0},
        card: {type: Boolean as PropType<boolean>, default: false},
        pills: {type: Boolean as PropType<boolean>, default: false},
        fill: {type: Boolean as PropType<boolean>, default: false},
        justified: {type: Boolean as PropType<boolean>, default: false},
        align: {type: String as PropType<'center' | 'end'>, default: null},
        end: {type: Boolean as PropType<boolean>, default: false},
        vertical: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, context) {
        const tabsMap = ref([]);

        provide('registerTab', (tab) => {
            let index = tabsMap.value.indexOf(tab);
            if (index < 0) {
                tabsMap.value.push(tab);
            } else {
                tabsMap.value[index] = tab;
            }
        });
        provide('unregisterTab', (tab) => {
            let index = tabsMap.value.indexOf(tab);
            if (index > -1) {
                tabsMap.value.splice(index, 1);
            }
        });
        const active = ref(props.modelValue);

        watch(() => props.modelValue, value => active.value = value);
        watch(active, value => {
            context.emit('update:modelValue', value);
            tabsMap.value.filter((tab) => tab.visible).forEach(tab => tab.visible = false);
            tabsMap.value[value].updateVisible(true)
            // tabsMap.value.forEach((tab, index) => tab.updateVisible(value === index));
        });

        return {
            tabsMap,
            classes: computed(() => {
                return {
                    card: props.card,
                    'd-flex': props.vertical,
                    'align-items-start': props.vertical
                }
            }),
            active
        }
    }
})
</script>