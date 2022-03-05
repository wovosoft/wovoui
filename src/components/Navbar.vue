<template>
    <nav :class="classes">
        <Container :fluid="fluid">
            <template v-if="brand || $slots.brand">
                <NavbarBrand :href="brandUrl">
                    <slot name="brand">
                        {{ brand }}
                    </slot>
                </NavbarBrand>
            </template>
            <NavbarToggler
                v-if="toggleEnabled"
                v-model="collapsed"
            />
            <slot :collapsed="collapsed" :toggleNavbar="toggleNavbar"></slot>
        </Container>
    </nav>
</template>
<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";

import Container from "./Container";
import NavbarBrand from "./NavbarBrand.vue";
import NavbarToggler from "./NavbarToggler.vue";
import type {ColorVariants} from "../types/colorVariants";

export default defineComponent({
    components: {NavbarToggler, NavbarBrand, Container},
    props: {
        brand: {type: String as PropType<string>, default: null},
        brandUrl: {type: String as PropType<string | object>, default: '#'},
        fluid: {type: Boolean as PropType<boolean>, default: false},
        toggleEnabled: {type: Boolean as PropType<boolean>, default: true},
        variant: {type: String as PropType<'dark' | 'light'>, default: 'light'},
        bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
        fixed: {type: String as PropType<'top' | 'bottom'>, default: null},
        sticky: {type: String as PropType<'top' | 'bottom'>, default: null},
        expandsOn: {type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>, default: 'lg'}
    },
    setup(props, context) {
        const collapsed = ref(false);
        return {
            collapsed,
            toggleNavbar() {
                collapsed.value = !collapsed.value;
            },
            classes: computed(() => [
                "navbar",
                {
                    ["navbar-" + props.variant]: props.variant,
                    ["bg-" + props.bgVariant]: props.bgVariant,
                    ["fixed-" + props.fixed]: !!props.fixed,
                    ["sticky-" + props.sticky]: !!props.sticky,
                    ["navbar-expand-" + props.expandsOn]: props.expandsOn
                }
            ])
        }
    }
})
</script>