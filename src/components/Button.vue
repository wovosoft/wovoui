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
import {make, makeString} from "../shared/properties.js";
import Badge from "./Badge.vue";
import {computed, defineComponent, PropType} from "vue";
import {ColorVariants, TrueFalse} from "../types"

import {badgePositions} from "../types/badgePositions";
import {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
    components: {Badge},
    props: {
        tag: makeString("button"),
        href: makeString(null),
        variant: {type: String as PropType<ColorVariants>, default: () => 'secondary'},
        size: {type: String as PropType<buttonSizes>, default: () => null},
        type: makeString("button"),
        outline: {type: Boolean as PropType<TrueFalse>, default: false},
        block: {type: Boolean as PropType<TrueFalse>, default: false},
        pill: {type: Boolean as PropType<TrueFalse>, default: false},
        squared: {type: Boolean as PropType<TrueFalse>, default: false},
        disabled: {type: Boolean as PropType<TrueFalse>, default: false},
        pressed: {type: Boolean as PropType<TrueFalse>, default: false},
        badge: make([String, Number], null),
        badePosition: {type: String as PropType<badgePositions>, default: () => null},
        badgeVariant: {type: String as PropType<ColorVariants>, default: () => 'secondary'},
        active: {type: Boolean as PropType<TrueFalse>, default: false},
        activeClass: makeString('active')
    },
    setup(props, context) {
        let attributes = {
            disabled: props.disabled,
        };
        if (props.pressed) {
            attributes["aria-pressed"] = true;
            attributes["autocomplete"] = "off";
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
            classes: computed(() => [
                "btn",
                {
                    ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: !!props.variant,
                    ["btn-" + props.size]: !!props.size,
                    'w-100': props.block,
                    'rounded-pill': props.pill,
                    'rounded-0': props.squared,
                    [props.activeClass]: props.pressed || props.active
                }
            ])
        }
    }
})
</script>