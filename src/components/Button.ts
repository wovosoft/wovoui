import {computed, defineComponent, getCurrentInstance, h, PropType, resolveComponent} from "vue";

import type {ButtonSizes} from "../types";
import {RouteLocationRaw} from "vue-router";
import {makeBoolean, makeProp, makeSize, makeString, makeVariant} from "../composables/useProps";


export default defineComponent({
    props: {
        tag: makeProp<HTMLElementTagNameMap | string>("button", String),
        href: makeString(null),
        to: makeProp<RouteLocationRaw>(null, Object),
        variant: makeVariant('secondary'),
        size: makeSize<ButtonSizes>(null),
        type: makeProp<'button' | 'submit'>("button", String),
        outline: makeBoolean(false),
        block: makeBoolean(false),
        pill: makeBoolean(false),
        squared: makeBoolean(false),
        disabled: makeBoolean(false),
        pressed: makeBoolean(false),
        noWrap: makeBoolean(false),
        link: makeBoolean(false),
        active: makeBoolean(false),
        activeClass: makeString("active"),
        noStyle: {type: Boolean as PropType<boolean>, default: false}
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
                // @ts-ignore
                getTag(),
                {
                    disabled: props.disabled,
                    ariaPressed: props.pressed,
                    autocomplete: props.pressed ? "off" : null,
                    type: type(),
                    //directly using href on router-link removes generated href by router-link
                    ...(props.to ? {to: props.to} : {href: props.href}),
                    class: !props.noStyle ? [
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
                    ] : [],
                    role: props.tag === "a" ? "button" : null,
                },
                props.to ? slots.default : slots.default?.()
            );
        }
    },
});
