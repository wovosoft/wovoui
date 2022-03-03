import { PropType } from "vue";
import { aspectRatios } from "../types/aspectRatios";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    ratio: {
        type: PropType<aspectRatios>;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    style: import("vue").ComputedRef<{
        "--bs-aspect-ratio": string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string>;
        default: string;
    };
    ratio: {
        type: PropType<aspectRatios>;
        default: string;
    };
}>>, {
    tag: string;
    ratio: aspectRatios;
}>;
export default _default;
//# sourceMappingURL=Aspect.vue.d.ts.map