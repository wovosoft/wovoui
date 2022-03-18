import { PropType } from "vue";
import type { ColorVariants } from "../types/colorVariants";
import type { dropdownAlignments } from "../types/dropdownAlignments";
import type { dropdownDirections } from "../types/dropdownDirections";
import type { buttonSizes } from "../types/buttonSizes";
declare const _default: {
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    menuTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    toggleTag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    size: {
        type: PropType<buttonSizes>;
        default: any;
    };
    text: {
        type: PropType<string>;
        default: any;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    splitVariant: {
        type: PropType<ColorVariants>;
        default: string;
    };
    block: {
        type: PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    /**
     * left,right,up, down=null (default)
     */
    dir: {
        type: PropType<dropdownDirections>;
        default: string;
    };
    align: {
        type: PropType<dropdownAlignments>;
        default: string;
    };
    menuDark: {
        type: PropType<boolean>;
        default: boolean;
    };
    menuClass: {
        type: PropType<string | object | any[]>;
        default: () => any[];
    };
    split: {
        type: PropType<boolean>;
        default: boolean;
    };
    isNav: {
        type: PropType<boolean>;
        default: boolean;
    };
    disableInnerClicks: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export default _default;
//# sourceMappingURL=dropdownProps.d.ts.map