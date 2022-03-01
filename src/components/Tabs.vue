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
                 :class="{'card-header-pills':pills}">
                <NavItem
                    role="presentation"
                    v-for="(tab,tab_index) in tabsMap"
                    :key="tab_index"
                    tag="li"
                    :active="tab_index===active"
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
import {makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import {ref, watch, provide, computed,defineComponent} from "vue";
import Nav from "./Nav.vue";
import NavItem from "./NavItem.vue";

export default defineComponent({
    emits: ['update:modelValue'],
    components: {NavItem, Nav},
    props: {
        modelValue: makeNumber(0),
        card: makeBoolean(false),
        pills: makeBoolean(false),
        fill: makeBoolean(false),
        justified: makeBoolean(false),
        align: makeString(),
        end: makeBoolean(false),
        vertical: makeBoolean(false)
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