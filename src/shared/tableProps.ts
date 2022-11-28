//used in DataTable and Table components

import {PropType} from "vue";
import type {ColorVariants, ResponsiveSizes} from "../types";
import tableCommonProps from "./tableCommonProps";

export default {
    ...tableCommonProps,
    /**
     * When set to true, the table becomes responsive. Wraps in .table-responsive
     */
    responsive: {type: [String, Boolean] as PropType<boolean | ResponsiveSizes>, default: false},

    /**
     * Makes table stripped
     */
    striped: {type: [Boolean, String] as PropType<boolean | 'columns'>, default: false},

    /**
     * Makes table hoverable
     */
    hover: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Makes table bordered
     */
    bordered: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Sets table border variant
     */
    borderVariant: {type: String as PropType<ColorVariants>, default: null},

    /**
     * Removes table borders
     */
    borderless: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Makes table shrink, smaller
     */
    small: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Sets table caption
     */
    caption: {type: String as PropType<string>, default: null},

    /**
     * Places table caption at top
     */
    captionTop: {type: Boolean as PropType<boolean>, default: false}
}