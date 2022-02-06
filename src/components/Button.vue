<template>
    <component
        :is="href?'a':tag"
        :type="tag==='button'?tag:null"
        :class="classes"
        v-bind="attributes">
        <slot></slot>
        <Badge v-if="badge" :variant="badgeVariant">
            {{ badge }}
        </Badge>
    </component>
</template>
<script lang="ts">
import {make, makeBoolean, makeString} from "../shared/properties.js";
import Badge from "./Badge.vue";
import {computed, defineComponent, PropType} from "vue";
import {ButtonSizes, TrueFalse} from "../types"
import ColorVariants from "../props/colorVariants";

export default defineComponent({
    components: {Badge},
    props: {
        tag: makeString("button"),
        href: makeString(null),
        variant: ColorVariants("secondary"),
        size: {
            type: String as PropType<ButtonSizes>,
            default: () => null
        },
        type: makeString("button"),
        outline: {
            type: Boolean as PropType<TrueFalse>
        },
        block: makeBoolean(false),
        pill: makeBoolean(false),
        squared: makeBoolean(false),
        disabled: makeBoolean(false),
        pressed: makeBoolean(false),
        badge: make([String, Number], null),
        badgeVariant: makeString('primary'),
        active: makeBoolean(false),
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