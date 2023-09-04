import {defineComponent, h, PropType} from "vue";
import type {Order, ResponsiveSizes} from "@/index";
import {makeTag} from "@/composables";

export default defineComponent({
    props: {
        tag: makeTag("div"),
        fill: {
            type: [Boolean, Array, String] as PropType<boolean | ResponsiveSizes | ResponsiveSizes[]>,
            default: false
        },
        grow: {
            type: Boolean as PropType<boolean>,
            default: null
        },
        growOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        shrink: {
            type: Boolean as PropType<boolean>,
            default: null
        },
        shrinkOn: {
            type: [String, Array] as PropType<ResponsiveSizes | ResponsiveSizes[]>,
            default: null
        },
        order: {type: [String, Number] as PropType<Order>, default: null},
        orderSm: {type: [String, Number] as PropType<Order>, default: null},
        orderMd: {type: [String, Number] as PropType<Order>, default: null},
        orderLg: {type: [String, Number] as PropType<Order>, default: null},
        orderXl: {type: [String, Number] as PropType<Order>, default: null},
        orderXxl: {type: [String, Number] as PropType<Order>, default: null},
    },
    setup(props, {slots}) {

        function getFilledClasses(): string[] {
            if (typeof props.fill === "boolean" && props.fill) {
                return ["flex-fill"];
            }

            if (typeof props.fill === "string") {
                return ["flex-" + props.fill + '-fill'];
            }

            if (Array.isArray(props.fill)) {
                return props.fill.map(fillOn => ["flex", fillOn, "fill"].join('-'));
            }

            return [];
        }

        function getResizingClasses(type: 'grow' | 'shrink' | 'fill'): string | string[] {
            if (!['grow', 'shrink'].includes(type)) {
                return [];
            }
            const resizesOn = type === 'grow' ? props.growOn : props.shrinkOn;

            if (props[type] !== null && !resizesOn) {
                return ["flex", type, Number(props.grow)].join('-');
            }

            if (props[type] !== null && resizesOn && Array.isArray(resizesOn)) {
                return resizesOn.map(ron => ["flex", type, ron, Number(props.grow)].join("-"));
            }
            return [];
        }

        function getOrderClasses() {
            const orders = ['order', 'orderSm', 'orderMd', 'orderLg', 'orderXl', 'orderXxl'] as const;
            return orders
                .map((s: typeof orders[number]): string | null => {
                    if (props?.[s] !== null) {
                        return s.replace(/[A-Z]/g, m => "-" + m.toLowerCase()) + '-' + props[s];
                    }
                    return null;
                })
                ?.filter(i => !!i);
        }

        return () => h(props.tag, {
            class: [
                getFilledClasses(),
                getResizingClasses('grow'),
                getResizingClasses('shrink'),
                getOrderClasses()
            ]
        }, slots?.default?.())
    }
});