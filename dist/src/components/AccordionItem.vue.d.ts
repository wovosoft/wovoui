import { PropType } from "vue";
import { Binary } from "../types/Binary";
declare const _default: import("vue").DefineComponent<{
    header: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<Binary>;
        default: boolean;
    };
    bodyClass: {
        type: PropType<any>;
        default: any;
    };
}, {
    visible: import("vue").Ref<Binary>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: PropType<string>;
        default: any;
    };
    modelValue: {
        type: PropType<Binary>;
        default: boolean;
    };
    bodyClass: {
        type: PropType<any>;
        default: any;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    header: string;
    modelValue: Binary;
    bodyClass: any;
}>;
export default _default;
//# sourceMappingURL=AccordionItem.vue.d.ts.map