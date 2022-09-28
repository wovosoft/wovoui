//used in DataTable and Table components

import {PropType} from "vue";
import type {ColorVariants, responsiveSizes} from "../types";
import tableCommonProps from "./tableCommonProps";

export default {
    ...tableCommonProps,
    responsive: {type: [String, Boolean] as PropType<boolean | responsiveSizes>, default: false},
    striped: {type: [Boolean, String] as PropType<boolean | 'columns'>, default: false},
    hover: {type: Boolean as PropType<boolean>, default: false},
    bordered: {type: Boolean as PropType<boolean>, default: false},
    borderVariant: {type: String as PropType<ColorVariants>, default: null},
    borderless: {type: Boolean as PropType<boolean>, default: false},
    small: {type: Boolean as PropType<boolean>, default: false},
    caption: {type: String as PropType<string>, default: null},
    captionTop: {type: Boolean as PropType<boolean>, default: false}
}