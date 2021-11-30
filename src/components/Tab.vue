<template>
    <teleport :to="'#'+tabMenuId" v-if="isMounted">
        <NavItem link-tag="button"
                 role="presentation"
                 @click="updateState"
                 :active="active">
            {{ title }}{{active}}
        </NavItem>
    </teleport>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import {make, makeBoolean, makeString} from "../shared/properties.js";
import {ref} from "vue";
import NavItem from "./NavItem.vue";

export default {
    name: "Tab",
    components: {NavItem},
    inject: ["tabMenuId", "updateTabIndex"],
    props: {
        active: makeBoolean(false),
        buttonId: makeString(),
        disabled: makeBoolean(false),
        id: makeString(),
        lazy: makeBoolean(false),
        noBody: makeBoolean(false),
        tag: makeString("div"),
        title: makeString(),
        titleItemClass: make([Array, String, Object], null),
        titleLinkClass: make([Array, String, Object], null),
        modelValue: makeBoolean(false)  //active or inactive state
    },
    setup(props, context) {
        const shown = ref(props.active);
        return {
            shown,
            isMounted: ref(false),
        }
    },
    mounted() {
        this.isMounted = true;
    },
    computed: {
        classes() {
            return [
                "tab-pane",
                "fade",
                {
                    active: this.shown,
                    show: this.shown
                }
            ]
        }
    },
    methods: {
        updateState(e) {
            let menuItems = this.$parent.$el.querySelectorAll(".nav-tabs>.nav-item");
            let target = e.target.parentNode;
            let index = [...menuItems].indexOf(target);
            this.shown = true;
            this.updateTabIndex(index)
        }
    }
}
</script>
