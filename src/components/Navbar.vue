<template>
    <nav :class="classes">
        <Container :fluid="fluid" :size="size">
            <template v-if="brand || $slots.brand">
                <slot name="brand">
                    <NavbarBrand :href="brandUrl">
                        {{ brand }}
                    </NavbarBrand>
                </slot>
            </template>
            <NavbarToggler
                v-if="toggleEnabled"
                v-model="collapsed"
            />
            <slot :collapsed="collapsed" :toggleNavbar="toggleNavbar"></slot>
        </Container>
    </nav>
</template>
<script lang="ts" setup>
import {computed, PropType, Ref, ref} from "vue";

import Container from "./Container";
import NavbarBrand from "./NavbarBrand";
import NavbarToggler from "./NavbarToggler";
import type {ColorVariants, responsiveSizes} from "../types";

const props = defineProps({
    brand: {type: String as PropType<string>, default: null},
    brandUrl: {type: String as PropType<string | object>, default: '#'},
    fluid: {type: Boolean as PropType<boolean>, default: false},
    size: {type: String as PropType<responsiveSizes>, default: null},
    toggleEnabled: {type: Boolean as PropType<boolean>, default: true},
    variant: {type: String as PropType<'dark' | 'light'>, default: 'light'},
    bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
    fixed: {type: String as PropType<'top' | 'bottom'>, default: null},
    sticky: {type: String as PropType<'top' | 'bottom'>, default: null},
    expandsOn: {type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>, default: 'lg'}
});

const collapsed: Ref<boolean> = ref(false);

function toggleNavbar() {
    collapsed.value = !collapsed.value;
}

const classes = computed(() => [
    "navbar",
    {
        ["navbar-" + props.variant]: props.variant,
        ["bg-" + props.bgVariant]: props.bgVariant,
        ["fixed-" + props.fixed]: !!props.fixed,
        ["sticky-" + props.sticky]: !!props.sticky,
        ["navbar-expand-" + props.expandsOn]: props.expandsOn
    }
])
</script>