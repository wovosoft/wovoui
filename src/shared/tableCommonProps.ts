import type {PropType} from "vue";
import type {ColorVariants, VerticalAlign} from "../types";

export default {
    /**
     * Sets table variant
     */
    variant: {type: String as PropType<ColorVariants>, default: null},

    /**
     * Sets table status active
     */
    active: {type: Boolean as PropType<boolean>, default: false},

    /**
     * Table alignment
     */
    align: {type: String as PropType<VerticalAlign>, default: null},
}