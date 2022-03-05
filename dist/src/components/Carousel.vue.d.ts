import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    slide: {
        type: PropType<boolean>;
        default: boolean;
    };
    controlsEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    indicatorsEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    fade: {
        type: PropType<boolean>;
        default: boolean;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    intervals: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<"next" | "prev">;
        default: string;
    };
}, {
    slides: import("vue").Ref<any[]>;
    direction: import("vue").Ref<string>;
    currentIndex: import("vue").ComputedRef<number>;
    changeSlide: (slideVisibility: any, next_slide_index: any, current_index?: any) => void;
    changeSlideByIndex: (type: any) => void;
    classes: import("vue").ComputedRef<(string | {
        slide: boolean;
        "carousel-fade": boolean;
        "carousel-dark": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    slide: {
        type: PropType<boolean>;
        default: boolean;
    };
    controlsEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    indicatorsEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    fade: {
        type: PropType<boolean>;
        default: boolean;
    };
    dark: {
        type: PropType<boolean>;
        default: boolean;
    };
    intervals: {
        type: PropType<number>;
        default: number;
    };
    direction: {
        type: PropType<"next" | "prev">;
        default: string;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    dark: boolean;
    fade: boolean;
    slide: boolean;
    controlsEnabled: boolean;
    indicatorsEnabled: boolean;
    intervals: number;
    direction: "next" | "prev";
}>;
export default _default;
//# sourceMappingURL=Carousel.vue.d.ts.map