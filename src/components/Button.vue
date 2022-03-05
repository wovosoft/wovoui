<template>
    <component
        :is="href?'a':tag"
        :type="theType"
        :class="classes"
        v-bind="attributes">
        <slot></slot>
        <Badge v-if="badge" :variant="badgeVariant" :position="badePosition">
            {{ badge }}
        </Badge>
    </component>
</template>
<script lang="ts">
import type {ColorVariants} from "../types/colorVariants";

interface Attributes {
    disabled: Boolean,
    ariaPressed: Boolean,
    autocomplete: string | null
}

import Badge from "./Badge";
import {computed, defineComponent, PropType} from "vue";

import type {badgePositions} from "../types/badgePositions";
import type {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    components: {Badge},
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "button"},
        href: {type: String as PropType<string>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: () => 'secondary'},
        size: {type: String as PropType<buttonSizes>, default: () => null},
        type: {type: String as PropType<string>, default: "button"},
        outline: {type: Boolean as PropType<boolean>, default: false},
        block: {type: Boolean as PropType<boolean>, default: false},
        pill: {type: Boolean as PropType<boolean>, default: false},
        squared: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        pressed: {type: Boolean as PropType<boolean>, default: false},
        badge: {type: [String, Number] as PropType<string | number>, default: null},
        badePosition: {type: String as PropType<badgePositions>, default: () => null},
        badgeVariant: {type: String as PropType<ColorVariants>, default: () => 'secondary'},
        active: {type: Boolean as PropType<boolean>, default: false},
        activeClass: {type: String as PropType<string>, default: "active"}
    },
    setup(props, context) {
        let attributes = {
            disabled: props.disabled,
            ariaPressed: false,
            autocomplete: null
        } as Attributes;

        if (props.pressed) {
            attributes.ariaPressed = true;
            attributes.autocomplete = "off";
        }
        return {
            attributes,
            theType: computed(() => {
                if (props.type) {
                    return props.type;
                }
                if (props.tag === "button" && !props.type) {
                    return "button";
                }
                return null;
            }),
            classes: computed(() => ([
                "btn",
                {
                    ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: !!props.variant,
                    ["btn-" + props.size]: !!props.size,
                    'w-100': props.block,
                    'rounded-pill': props.pill,
                    'rounded-0': props.squared,
                    [props.activeClass]: props.pressed || props.active
                }
            ]))
        }
    }
})
</script>