import { PropType } from "vue";
import type { badgePositions } from "../types/badgePositions";
import type { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    pill: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    position: {
        type: PropType<badgePositions>;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    pill: {
        type: PropType<boolean>;
        default: boolean;
    };
    href: {
        type: PropType<string>;
        default: any;
    };
    position: {
        type: PropType<badgePositions>;
        default: any;
    };
}>>, {
    tag: keyof HTMLElementTagNameMap;
    variant: ColorVariants;
    href: string;
    pill: boolean;
    position: badgePositions;
}>;
export default _default;
//# sourceMappingURL=Badge.d.ts.map