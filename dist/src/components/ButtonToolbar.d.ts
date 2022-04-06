import { PropType } from "vue";
import { Binary } from "../types/Binary";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
    justified: {
        type: PropType<Binary>;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
    justified: {
        type: PropType<Binary>;
        default: boolean;
    };
}>>, {
    role: string;
    tag: string;
    justified: Binary;
}>;
export default _default;
//# sourceMappingURL=ButtonToolbar.d.ts.map