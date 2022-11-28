import {Component, defineComponent, h, PropType} from "vue";

/**
 * Conditional Render
 * If modelValue is false then the default slot is generated,
 * otherwise provided component will be generated with all of its props and attributes
 */
export default defineComponent({
    props: {
        component: {
            type: [String, Object] as PropType<Component | keyof HTMLElementTagNameMap | string>,
            default: "div"
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: true
        }
    },
    setup(props, {slots, attrs}) {
        return () => {
            if (props.modelValue) {
                return h(props.component, {
                    ...attrs
                }, (typeof props.component === "string") ? slots?.default() : slots?.default);
            }
            return slots?.default();
        };
    }
})