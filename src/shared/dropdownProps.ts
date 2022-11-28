import {PropType} from "vue";
import type {ColorVariants} from "../types";
import type {DropdownAlignments} from "../types";
import type {DropdownDirections} from "../types";
import type {ButtonSizes} from "../types";


export default {
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    menuTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "ul"},
    toggleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "button"},
    size: {type: String as PropType<ButtonSizes>, default: null},
    text: {type: String as PropType<string>, default: null},
    variant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    splitVariant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    block: {type: Boolean as PropType<boolean>, default: false},
    disabled: {type: Boolean as PropType<boolean>, default: false},
    /**
     * left,right,up, down=null (default)
     */
    dir: {type: String as PropType<DropdownDirections>, default: "bottom"},
    align: {type: String as PropType<DropdownAlignments>, default: "start"},
    menuDark: {type: Boolean as PropType<boolean>, default: false},
    menuClass: {type: [String, Array, Object] as PropType<string | object | any[]>, default: () => ([])},

    split: {type: Boolean as PropType<boolean>, default: false},
    isNav: {type: Boolean as PropType<boolean>, default: false},
    disableInnerClicks: {type: Boolean as PropType<boolean>, default: false},
}