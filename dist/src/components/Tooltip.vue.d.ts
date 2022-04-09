import { PropType } from "vue";
import type { tooltipPlacement } from "../types/tooltipPlacement";
declare const _default: import("vue").DefineComponent<{
    target: {
        type: PropType<string>;
        default: any;
        required: true;
    };
    content: {
        type: PropType<string>;
        default: any;
    };
    placement: {
        type: PropType<tooltipPlacement>;
        default: string;
    };
    opensOn: {
        type: PropType<keyof GlobalEventHandlersEventMap>;
        default: string;
    };
    ClosesOn: {
        type: PropType<keyof GlobalEventHandlersEventMap>;
        default: string;
    };
}, {
    shouldShow: import("vue").Ref<boolean>;
    popperOptions: import("vue").ComputedRef<{
        placement: tooltipPlacement;
        modifiers: {
            name: string;
            enabled: boolean;
            phase: string;
            fn({ state }: {
                state: any;
            }): void;
        }[];
    }>;
    classes: import("vue").ComputedRef<(string | {
        show: boolean;
    })[]>;
    show: () => boolean;
    hide: () => boolean;
    toggle: () => boolean;
}, unknown, {
    targetElement(): HTMLElement;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    target: {
        type: PropType<string>;
        default: any;
        required: true;
    };
    content: {
        type: PropType<string>;
        default: any;
    };
    placement: {
        type: PropType<tooltipPlacement>;
        default: string;
    };
    opensOn: {
        type: PropType<keyof GlobalEventHandlersEventMap>;
        default: string;
    };
    ClosesOn: {
        type: PropType<keyof GlobalEventHandlersEventMap>;
        default: string;
    };
}>>, {
    content: string;
    target: string;
    placement: tooltipPlacement;
    opensOn: keyof GlobalEventHandlersEventMap;
    ClosesOn: keyof GlobalEventHandlersEventMap;
}>;
export default _default;
//# sourceMappingURL=Tooltip.vue.d.ts.map