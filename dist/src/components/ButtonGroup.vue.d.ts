import { PropType } from "vue";
import { buttonSizes } from "../types/buttonSizes";
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
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | buttonSizes;
        "btn-group": boolean;
        "btn-group-vertical": boolean;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
//# sourceMappingURL=ButtonGroup.vue.d.ts.map