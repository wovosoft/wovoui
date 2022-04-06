import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import { responsiveSizes } from "../types/responsiveLayoutSizes";
declare const _default: {
    responsive: {
        type: PropType<boolean | responsiveSizes>;
        default: boolean;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    striped: {
        type: PropType<boolean>;
        default: boolean;
    };
    hover: {
        type: PropType<boolean>;
        default: boolean;
    };
    active: {
        type: PropType<boolean>;
        default: boolean;
    };
    bordered: {
        type: PropType<boolean>;
        default: boolean;
    };
    borderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    borderless: {
        type: PropType<boolean>;
        default: boolean;
    };
    small: {
        type: PropType<boolean>;
        default: boolean;
    };
    valign: {
        type: PropType<"top" | "middle" | "bottom">;
        default: any;
    };
    caption: {
        type: PropType<string>;
        default: any;
    };
    captionTop: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export default _default;
//# sourceMappingURL=tableProps.d.ts.map