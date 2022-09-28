import type {ColorVariants} from "../types/colorVariants";

import {computed, defineComponent, getCurrentInstance, h, PropType, resolveComponent} from "vue";

import type {buttonSizes} from "../types/buttonSizes";
import {RouteLocationRaw} from "vue-router";

export default defineComponent({
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "button"},
        href: {type: String as PropType<string>, default: null},
        to: {type: Object as PropType<RouteLocationRaw>, default: null},
        variant: {type: String as PropType<ColorVariants>, default: () => "secondary"},
        size: {type: String as PropType<buttonSizes>, default: () => null},
        type: {type: String as PropType<string>, default: "button"},
        outline: {type: Boolean as PropType<boolean>, default: false},
        block: {type: Boolean as PropType<boolean>, default: false},
        pill: {type: Boolean as PropType<boolean>, default: false},
        squared: {type: Boolean as PropType<boolean>, default: false},
        disabled: {type: Boolean as PropType<boolean>, default: false},
        pressed: {type: Boolean as PropType<boolean>, default: false},
        noWrap: {type: Boolean as PropType<boolean>, default: false},
        link: {type: Boolean as PropType<boolean>, default: false},
        active: {type: Boolean as PropType<boolean>, default: false},
        activeClass: {type: String as PropType<string>, default: "active"},
    },
    setup(props, {slots}) {
        const isVueRouterInstalled = computed(() => {
            return !!getCurrentInstance().appContext.config.globalProperties.$router;
        });

        return () => {
            const type = () => {
                if (props.link || props.href || props.to) {
                    return null;
                }
                if (props.type) {
                    return props.type;
                }
                if (props.tag === "button" && !props.type) {
                    return "button";
                }

                return props.type;
            };

            const getTag = () => {
                if (props.href) {
                    return "a";
                }

                if (props.to && isVueRouterInstalled.value) {
                    return resolveComponent("router-link");
                }
                return props.tag;
            }

            return h(
                getTag(),
                {
                    disabled: props.disabled,
                    ariaPressed: props.pressed,
                    autocomplete: props.pressed ? "off" : null,
                    type: type(),
                    //directly using href on router-link removes generated href by router-link
                    ...(props.to ? {to: props.to} : {href: props.href}),
                    class: [
                        "btn",
                        {
                            disabled: props.disabled && props.tag === "a",
                            ["btn-" + (props.outline ? "outline-" : "") + props.variant]: !!props.variant,
                            ["btn-" + props.size]: !!props.size,
                            "w-100": props.block,
                            "rounded-pill": props.pill,
                            "rounded-0": props.squared,
                            [props.activeClass]: props.pressed || props.active,
                            "text-nowrap": props.noWrap,
                        },
                    ],
                    role: props.tag === "a" ? "button" : null,
                },
                props.to ? slots.default : slots.default?.()
            );
        }
    },
});
