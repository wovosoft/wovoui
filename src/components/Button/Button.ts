import {defineComponent, h, inject} from "vue";
import type {ButtonSizes} from "@/index";
import {makeBoolean, makeProp, makeSize, makeString, makeTag, makeVariant} from "@/composables/useProps";

export default defineComponent({
    props: {
        tag: makeTag("button"),
        href: makeString(null),
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
        noStyle: makeBoolean(false)
    },
    setup(props, {slots}) {
        //data comes from ButtonGroup
        const isGroupOutlined = inject<boolean>('outline', false);


        return () => {
            const type = () => {
                if (getTag() !== 'button') {
                    return null;
                }
                if (props.type) {
                    return props.type;
                }
                if (getTag() === "button" && !props.type) {
                    return "button";
                }

                return props.type;
            };

            const getTag = () => props.href ? "a" : props.tag;


            return h(
                getTag(),
                {
                    disabled: props.disabled,
                    ariaPressed: props.pressed,
                    autocomplete: props.pressed ? "off" : null,
                    type: type(),
                    class: !props.noStyle ? [
                        "btn",
                        {
                            disabled: props.disabled && props.tag === "a",
                            ["btn-" + ((props.outline || isGroupOutlined) ? "outline-" : "") + props.variant]: !!props.variant,
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
                slots.default?.()
            );
        }
    },
});
