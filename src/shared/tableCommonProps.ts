import type {PropType} from "vue";
import type {ColorVariants, VerticalAlign} from "../types";

export default {
    variant: {type: String as PropType<ColorVariants>, default: null},
    active: {type: Boolean as PropType<boolean>},
    align: {type: String as PropType<VerticalAlign>, default: null},
}