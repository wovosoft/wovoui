<template>
    <component :is="tag" :class="classes" ref="target">
        <Button
            v-if="split"
            :disabled="disabled"
            :variant="splitVariant"
            :block="block"
            :size="size">
            <slot name="button-content">
                {{ text }}
            </slot>
        </Button>
        <NavLink v-if="isNav"
                 ref="toggle"
                 class="dropdown-toggle"
                 role="button"
                 @click="shouldOpen=!shouldOpen">
            {{ text }}
        </NavLink>
        <Button
            v-else
            ref="toggle"
            :tag="toggleTag"
            :block="block"
            :disabled="disabled"
            :variant="variant"
            :size="size"
            class="dropdown-toggle"
            :class="{'show':shouldOpen,'dropdown-toggle-split':split}"
            @click="shouldOpen=!shouldOpen"
            :aria-expanded="toggleAriaExpanded">
            <slot name="button-content">
                <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                <template v-else>{{ text }}</template>
            </slot>
        </Button>
        <DropdownMenu
            ref="menu"
            :show="shouldOpen"
            :tag="menuTag"
            :class="menuClass"
            :dark="menuDark">
            <slot></slot>
        </DropdownMenu>
    </component>
</template>

<script lang="ts">
import {createPopper, Instance as PopperType} from '@popperjs/core';
import dropdownProps from "../shared/dropdownProps";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu.vue";
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import NavItem from "./NavItem.vue";
import NavLink from "./NavLink.vue";
import {onClickOutside} from "@vueuse/core";

export default defineComponent({
    name: "Dropdown",
    components: {NavLink, NavItem, Button, DropdownMenu},
    props: dropdownProps,
    setup(props) {
        const shouldOpen = ref<boolean>(false);
        const target = ref<HTMLElement | null>(null);
        const toggle = ref<HTMLElement | null>(null);
        const menu = ref<HTMLElement | null>(null);


        onClickOutside(target, () => shouldOpen.value = false);


        const popperInstance = ref<PopperType>(null);
        watch(shouldOpen, value => {
            popperInstance.value?.update();
            this.toggleAriaExpanded = value;
        })

        onMounted(() => {
            popperInstance.value = createPopper(
                toggle.value.$el,
                menu.value.$el,
                this.popperOptions
            );
        })

        return {
            target,
            toggle,
            menu,
            shouldOpen,
            toggleAriaExpanded: ref<boolean>(false),
            popperInstance: ref<unknown>(null),
            classes: computed(() => [
                {
                    "btn-group": !props.block && !props.isNav,
                    "dropdown": props.block || props.isNav,
                    "dropend": props.dir === "right",
                    "dropstart": props.dir === "left",
                    "dropup": props.dir === "top",
                }
            ]),
            popperOptions: computed(() => ({
                placement: props.align ? [props.dir, props.align].join("-") : "bottom-start",
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 5],
                        },
                    },
                ],
            }))
        }
    },
})
</script>