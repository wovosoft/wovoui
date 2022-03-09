import {PropType} from "vue";

export default {
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
    modelValue: {type: Number as PropType<number>, default: null},
    flush: {type: Boolean as PropType<boolean>, default: false},
    alwaysOpen: {type: Boolean as PropType<boolean>, default: false}
}