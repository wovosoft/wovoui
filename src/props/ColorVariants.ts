import {PropType} from "vue";
import {ColorVariants} from "../types";

export default (initial = "secondary") => ({
    type: String as PropType<ColorVariants>,
    default: typeof initial === "function" ? initial : () => initial
})