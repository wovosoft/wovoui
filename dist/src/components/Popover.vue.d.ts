import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    target: {
        type: PropType<string>;
        required: true;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: PropType<string>;
        default: string;
    };
    triggers: {
        type: PropType<keyof HTMLElementEventMap>;
        default: string;
    };
}, {
    shown: import("vue").Ref<boolean>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
        show: boolean;
    })[]>;
    events: import("vue").ComputedRef<(keyof HTMLElementEventMap)[]>;
    popper: any;
    popperOptions: import("vue").ComputedRef<{
        placement: string;
        modifiers: ({
            name: string;
            enabled: boolean;
            phase: string;
            fn({ state }: {
                state: any;
            }): void;
        } | {
            name: string;
            enabled: boolean;
            options: {
                offset: (d: any) => number[];
            };
        })[];
    }>;
}, unknown, {}, {
    destroyPopper(): void;
    initPopper(): void;
    clickOutside(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    target: {
        type: PropType<string>;
        required: true;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<boolean>;
        default: boolean;
    };
    placement: {
        type: PropType<string>;
        default: string;
    };
    triggers: {
        type: PropType<keyof HTMLElementEventMap>;
        default: string;
    };
}>>, {
    modelValue: boolean;
    header: string;
    placement: string;
    triggers: keyof HTMLElementEventMap;
}>;
export default _default;
//# sourceMappingURL=Popover.vue.d.ts.map