import {PropType} from "vue";
import type {ColorVariants} from "../types/colorVariants";

export default {
    responsive: {type: [String, Boolean] as PropType<string | boolean>, default: false},
    variant: {type: String as PropType<ColorVariants>, default: null},
    striped: {type: Boolean as PropType<boolean>, default: false},
    hover: {type: Boolean as PropType<boolean>, default: false},
    active: {type: Boolean as PropType<boolean>, default: false},
    bordered: {type: Boolean as PropType<boolean>, default: false},
    borderVariant: {type: String as PropType<string>, default: null},
    borderless: {type: Boolean as PropType<boolean>, default: false},
    small: {type: Boolean as PropType<boolean>, default: false},
    valign: {type: String as PropType<'middle' | 'bottom' | 'top'>, default: null},
    caption: {type: String as PropType<string>, default: null},
    captionTop: {type: Boolean as PropType<boolean>, default: false}
}