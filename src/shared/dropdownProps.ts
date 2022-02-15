import {make, makeString} from "./properties.js";
import {PropType} from "vue";
import {ColorVariants} from "../types/colorVariants";

export default {
    tag: makeString("div"),
    menuTag: makeString("ul"),
    toggleTag: makeString("button"),
    size: makeString(),
    text: makeString(),
    variant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    splitVariant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    block: {type: Boolean as PropType<true | false>, default: false},
    disabled: {type: Boolean as PropType<true | false>, default: false},
    /**
     * left,right,up, down=null (default)
     */
    dir: makeString("bottom"),
    align: makeString("start"),
    menuDark: {type: Boolean as PropType<true | false>, default: false},
    menuClass: make([String, Array], []),

    split: {type: Boolean as PropType<true | false>, default: false}
}