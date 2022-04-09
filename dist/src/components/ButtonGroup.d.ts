import { PropType } from "vue";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    ariaLabel: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<buttonSizes>;
        default: () => any;
    };
    vertical: {
        type: PropType<boolean>;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    ariaLabel: {
        type: PropType<string>;
        default: string;
    };
    size: {
        type: PropType<buttonSizes>;
        default: () => any;
    };
    vertical: {
        type: PropType<boolean>;
    };
    role: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    size: buttonSizes;
    tag: string;
    ariaLabel: string;
    role: string;
}>;
export default _default;
/**
 * When `classes` is defined outside render function, it should be computed. if used inside render function,
 * no need to be computed because render function itself is reactive
 */ 
//# sourceMappingURL=ButtonGroup.d.ts.map