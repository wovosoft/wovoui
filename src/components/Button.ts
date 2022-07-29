import type {ColorVariants} from "../types/colorVariants";

import Badge from "./Badge";
import {defineComponent, h, PropType} from "vue";

import type {badgePositions} from "../types/badgePositions";
import type {buttonSizes} from "../types/buttonSizes";

export default defineComponent({
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
        noWrap: {type: Boolean as PropType<boolean>, default: false},
        badge: {type: [String, Number] as PropType<string | number>, default: null},
        badePosition: {type: String as PropType<badgePositions>, default: () => null},
        badgeVariant: {type: String as PropType<ColorVariants>, default: () => 'secondary'},
        active: {type: Boolean as PropType<boolean>, default: false},
        activeClass: {type: String as PropType<string>, default: "active"}
    },
    setup(props, {slots}) {
        const type = () => {
            if (props.type) {
                return props.type;
            }
            if (props.tag === "button" && !props.type) {
                return "button";
            }
            return null;
        };
        const badge = () => {
            if (!props.badge) {
                return null;
            }

            return h(Badge, {
                variant: props.badgeVariant,
                position: props.badePosition,
                content: props.badge
            })
        }
        return () => {
            return h(props.href ? 'a' : props.tag,
                {
                    disabled: props.disabled,
                    ariaPressed: props.pressed,
                    autocomplete: props.pressed ? "off" : null,
                    type: type(),
                    class: ["btn", {
                        "disabled":props.disabled && props.tag==="a",
                        ["btn-" + (props.outline ? 'outline-' : '') + props.variant]: !!props.variant,
                        ["btn-" + props.size]: !!props.size,
                        'w-100': props.block,
                        'rounded-pill': props.pill,
                        'rounded-0': props.squared,
                        [props.activeClass]: props.pressed || props.active,
                        "text-nowrap":props.noWrap
                    }],
                    role:props.tag==="a"?"button":null
                },
                [
                    slots.default ?.(),
                    badge()
                ])
        }

    }
})