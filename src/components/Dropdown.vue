<template>
    <component :is="tag" :class="classes">
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
            {{text}}
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
import {createPopper} from '@popperjs/core';
import dropdownProps from "../shared/dropdownProps";
import Button from "./Button.vue";
import DropdownMenu from "./DropdownMenu.vue";
import {computed, defineComponent} from "vue";
import NavItem from "./NavItem.vue";
import NavLink from "./NavLink.vue";

export default defineComponent({
    name: "Dropdown",
    components: {NavLink, NavItem, Button, DropdownMenu},
    props: dropdownProps,
    setup(props) {
        return {
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

    data() {
        return {
            shouldOpen: false,
            toggleAriaExpanded: false,
            popperInstance: null,
        }
    },
    mounted() {
        //https://popper.js.org/docs/v2/constructors/#options
        this.popperInstance = createPopper(
            this.$refs.toggle.$el,
            this.$refs.menu.$el,
            this.popperOptions
        );
    },
    methods: {
        clickOutside(e) {
            if (e.target !== this.$refs.toggle.$el) {
                this.shouldOpen = false;
            }
        }
    },
    watch: {
        shouldOpen(value) {
            this.popperInstance.update();
            this.toggleAriaExpanded = value;
            if (value) {
                document.addEventListener("click", this.clickOutside);
            } else {
                document.removeEventListener("click", this.clickOutside);
            }
        }
    }
})
</script>