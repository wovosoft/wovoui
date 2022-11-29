<template>
    <nav :class="classes" role="navigation">
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
import {computed, PropType, ref} from "vue";
import {Container, NavbarBrand, NavbarToggler} from "../..";
import type {ColorVariants, ResponsiveSizes} from "../../types";
import {makeBoolean, makeString} from "../../composables/useProps";

const props = defineProps({
    brand: makeString(),
    brandUrl: {type: String as PropType<string>, default: '#'},
    fluid: makeBoolean(false),
    size: {type: String as PropType<ResponsiveSizes>, default: null},
    toggleEnabled: makeBoolean(true),
    variant: {type: String as PropType<'dark' | 'light'>, default: 'light'},
    bgVariant: {type: String as PropType<ColorVariants>, default: 'light'},
    fixed: {type: String as PropType<'top' | 'bottom'>, default: null},
    sticky: {type: String as PropType<'top' | 'bottom'>, default: null},
    expandsOn: {type: String as PropType<ResponsiveSizes | ResponsiveSizes[]>, default: 'lg'},
});

const collapsed = ref<boolean>(false);

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
    },
    ...(Array.isArray(props.expandsOn) ? props.expandsOn : [props.expandsOn])
        .map(screen => "navbar-expand-" + screen)
])
</script>