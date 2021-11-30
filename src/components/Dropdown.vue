<template>
    <component :is="tag" :class="classes">
        <Button
            ref="toggle"
            :tag="toggleTag"
            :block="block"
            :disabled="disabled"
            :variant="variant"
            :size="size"
            class="dropdown-toggle"
            :class="{'show':shouldOpen}"
            @click="shouldOpen=!shouldOpen"
            :aria-expanded="toggleAriaExpanded">
            {{ text }}
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
<script setup>
import Button from "./Button.vue";
import DropdownMenu from "./DropdownMenu.vue";
import dropdownProps from "../shared/dropdownProps.js";

const props = defineProps(dropdownProps);

</script>
<script>
import {createPopper} from '@popperjs/core';

export default {
    name: "Dropdown",
    computed: {
        classes() {
            return [
                "dropdown",
                {
                    "dropend": this.dir === "right",
                    "dropstart": this.dir === "left",
                    "dropup": this.dir === "top"
                }
            ]
        },
        popperOptions() {
            return {
                placement: this.align ? [this.dir, this.align].join("-") : "bottom-start",
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 5],
                        },
                    },
                ],
            };
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
}
</script>