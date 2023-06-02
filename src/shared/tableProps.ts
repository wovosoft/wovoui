//used in DataTable and Table components

import {PropType} from "vue";
import type {ResponsiveSizes} from "@/types";
import tableCommonProps from "./tableCommonProps";
import {makeBoolean, makeString, makeVariant} from "@/composables";

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
    hover: makeBoolean(false),

    /**
     * Makes table bordered
     */
    bordered: makeBoolean(false),

    /**
     * Sets table border variant
     */
    borderVariant: makeVariant(),

    /**
     * Removes table borders
     */
    borderless: makeBoolean(false),

    /**
     * Makes table shrink, smaller
     */
    small: makeBoolean(false),

    /**
     * Sets table caption
     */
    caption: makeString(),

    /**
     * Places table caption at top
     */
    captionTop: makeBoolean(false)
}