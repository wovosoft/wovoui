import {PropType} from "vue";
import {Binary} from "../types";

export default (initial = false) => ({
    type: Boolean as PropType<Binary>,
    default: typeof initial === "function" ? initial : () => initial
})