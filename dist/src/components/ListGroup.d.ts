import { PropType } from "vue";
import type { responsiveSizes } from "../types/responsiveLayoutSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    numbered: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean | responsiveSizes>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    flush: {
        type: PropType<boolean>;
        default: boolean;
    };
    numbered: {
        type: PropType<boolean>;
        default: boolean;
    };
    horizontal: {
        type: PropType<boolean | responsiveSizes>;
        default: boolean;
    };
}>>, {
    tag: string;
    flush: boolean;
    horizontal: boolean | responsiveSizes;
    numbered: boolean;
}>;
export default _default;
//# sourceMappingURL=ListGroup.d.ts.map