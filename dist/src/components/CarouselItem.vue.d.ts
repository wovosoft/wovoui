import { PropType, Ref } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}, {
    visible: Ref<boolean>;
    direction: unknown;
    classes: import("vue").ComputedRef<string[]>;
}, unknown, {}, {
    transitionEnd(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:active" | "slidingStart" | "slidingEnd")[], "update:active" | "slidingStart" | "slidingEnd", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}>> & {
    "onUpdate:active"?: (...args: any[]) => any;
    onSlidingStart?: (...args: any[]) => any;
    onSlidingEnd?: (...args: any[]) => any;
}, {
    active: boolean;
    tag: string;
    activeClass: string;
}>;
export default _default;
//# sourceMappingURL=CarouselItem.vue.d.ts.map