import { PropType, Ref } from "vue";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    brand: {
        type: PropType<string>;
        default: any;
    };
    brandUrl: {
        type: PropType<string | object>;
        default: string;
    };
    fluid: {
        type: PropType<boolean>;
        default: boolean;
    };
    toggleEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    fixed: {
        type: PropType<"top" | "bottom">;
        default: any;
    };
    sticky: {
        type: PropType<"top" | "bottom">;
        default: any;
    };
    expandsOn: {
        type: PropType<"sm" | "lg" | "md" | "xl" | "xxl">;
        default: string;
    };
}, {
    collapsed: Ref<boolean>;
    toggleNavbar(): void;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | "sm" | "lg" | "md" | "xl" | ColorVariants | "xxl";
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    brand: {
        type: PropType<string>;
        default: any;
    };
    brandUrl: {
        type: PropType<string | object>;
        default: string;
    };
    fluid: {
        type: PropType<boolean>;
        default: boolean;
    };
    toggleEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    variant: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    fixed: {
        type: PropType<"top" | "bottom">;
        default: any;
    };
    sticky: {
        type: PropType<"top" | "bottom">;
        default: any;
    };
    expandsOn: {
        type: PropType<"sm" | "lg" | "md" | "xl" | "xxl">;
        default: string;
    };
}>>, {
    fixed: "top" | "bottom";
    variant: "dark" | "light";
    fluid: boolean;
    brand: string;
    bgVariant: ColorVariants;
    brandUrl: string | object;
    toggleEnabled: boolean;
    sticky: "top" | "bottom";
    expandsOn: "sm" | "lg" | "md" | "xl" | "xxl";
}>;
export default _default;
//# sourceMappingURL=Navbar.vue.d.ts.map