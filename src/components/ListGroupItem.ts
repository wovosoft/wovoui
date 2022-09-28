import { defineComponent, h, PropType, resolveComponent } from "vue";
import type { ColorVariants } from "../types";

export default defineComponent({
    name: "ListGroupItem",
    props: {
        tag: { type: String as PropType<string>, default: "li" },
        active: { type: Boolean as PropType<boolean>, default: false },
        disabled: { type: Boolean as PropType<boolean>, default: false },
        href: { type: String as PropType<string>, default: null },
        to: { default: () => null },
        button: { type: Boolean as PropType<boolean>, default: false },
        variant: { type: String as PropType<ColorVariants>, default: null }
    },
    setup(props, { slots }) {
        const getTag = () => {
            if (props.to) {
                return resolveComponent("router-link");
            }
            if (props.href) {
                return "a";
            }
            if (props.button) {
                return "button";
            }
            return props.tag;
        }

        return () => {
            const classes = [
                "list-group-item",
                {
                    "active": props.active,
                    "disabled": props.disabled,
                    "list-group-item-action": props.button || getTag() === 'a',
                    ["list-group-item-" + props.variant]: !!props.variant
                }
            ];

            const attributes = {
                'aria-current': props.active,
                'aria-disabled': props.disabled
            };


            return h(getTag(), {
                href: props.href,
                to: props.to,
                class: classes,
                ...attributes
            }, props.to ? slots.default : slots?.default())
        };
    }
})