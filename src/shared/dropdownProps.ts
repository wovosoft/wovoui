import {PropType} from "vue";
import type {ColorVariants} from "@/types";
import type {DropdownAlignments} from "@/types";
import type {DropdownDirections} from "@/types";
import type {ButtonSizes} from "@/types";
import {makeBoolean, makeSize, makeString, makeTag} from "@/composables";


export default {
    tag: makeTag("div"),
    menuTag: makeTag("ul"),
    toggleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "button"},
    size: makeSize<ButtonSizes>(null),
    text: makeString(),
    variant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    splitVariant: {type: String as PropType<ColorVariants>, default: 'secondary'},
    block: makeBoolean(false),
    disabled: makeBoolean(false),
    /**
     * left,right,up, down=null (default)
     */
    dir: {type: String as PropType<DropdownDirections>, default: "bottom"},
    align: {type: String as PropType<DropdownAlignments>, default: "start"},
    menuDark: makeBoolean(false),
    menuClass: {type: [String, Array, Object] as PropType<string | object | any[]>, default: () => ([])},

    split: makeBoolean(false),
    isNav: makeBoolean(false),
    disableInnerClicks: makeBoolean(false),
}