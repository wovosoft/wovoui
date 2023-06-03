import {defineComponent, h, resolveComponent} from "vue";
import {makeBoolean, makeProp, makeString, makeTag, makeVariant} from "@/composables";
import type {RouteLocationRaw} from "vue-router";

export default defineComponent({
    name: "ListGroupItem",
    props: {
        tag: makeTag("li"),
        active: makeBoolean(false),
        disabled: makeBoolean(false),
        href: makeString(null),
        to: makeProp<RouteLocationRaw>(null, Object),
        button: makeBoolean(false),
        variant: makeVariant(null)
    },
    setup(props, {slots}) {
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
        };

        return () => {
            return h(getTag(), {
                ariaCurrent: props.active,
                ariaDisabled: props.disabled,
                href: props.href,
                to: props.to,
                class: [
                    "list-group-item",
                    {
                        "active": props.active,
                        "disabled": props.disabled,
                        "list-group-item-action": props.button || getTag() === 'a',
                        ["list-group-item-" + props.variant]: !!props.variant
                    }
                ],
            }, props.to ? slots.default : slots?.default?.())
        };
    }
})