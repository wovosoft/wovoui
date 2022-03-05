import { PropType } from "vue";
import type { responsiveSizes } from "../types/responsiveLayoutSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    fluid: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<responsiveSizes>;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    fluid: {
        type: PropType<boolean>;
        default: boolean;
    };
    size: {
        type: PropType<responsiveSizes>;
        default: any;
    };
}>>, {
    size: responsiveSizes;
    tag: keyof HTMLElementTagNameMap;
    fluid: boolean;
}>;
export default _default;
//# sourceMappingURL=Container.d.ts.map