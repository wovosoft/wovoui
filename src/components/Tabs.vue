<template>
    <div :class="classes" :id="id">
        <div class="tabs-header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <Nav tabs :id="tabMenuId" role="tablist"></Nav>
        <div :class="contentClasses" :id="contentId">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {make, makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import {computed} from "vue";
import Nav from "./Nav.vue";

export default {
    name: "Tabs",
    components: {Nav},
    props: {
        card: makeBoolean(false),
        align: makeString(),
        contentClass: make([Array, String], null),
        end: makeBoolean(false),
        fill: makeBoolean(false),
        id: makeString(),
        contentId: makeString(),
        lazy: makeBoolean(false),
        navClass: make([Array, String], null),
        navWrapperClass: make([Array, String], null),
        noFade: makeBoolean(false),
        noNavStyle: makeBoolean(false),
        pills: makeBoolean(false),
        small: makeBoolean(false),
        modelValue: makeNumber(0),  //index of active tab
        vertical: makeBoolean(false)
    },
    setup(props) {
        const classes = computed(() => {
            return []
        });
        const contentClasses = computed(() => {
            return [
                "tab-content"
            ]
        });
        const tabMenuId = computed(() => {
            return props.id + "_tab_menu_id_" + Math.round(Date.now() * Math.random());
        })
        return {
            classes,
            contentClasses,
            tabMenuId
        }
    },
    provide() {
        return {
            tabMenuId: this.tabMenuId,
            updateTabIndex: (index) => {
                console.log(index)
                this.$emit("update:modelValue", index);
            }
        }
    }
}
</script>