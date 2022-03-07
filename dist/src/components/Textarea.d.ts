import { PropType } from "vue";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    modelValue: {
        type: PropType<string>;
        default: any;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    modelValue: {
        type: PropType<string>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    size: buttonSizes;
    modelValue: string;
}>;
export default _default;
//# sourceMappingURL=Textarea.d.ts.map