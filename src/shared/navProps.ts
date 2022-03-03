import {PropType} from "vue";

export default {
    tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "ul"},
    align: {type: String as PropType<string>, default: null},
    vertical: {type: Boolean as PropType<boolean>, default: false},
    pills: {type: Boolean as PropType<boolean>, default: false},
    fill: {type: Boolean as PropType<boolean>, default: false},
    justified: {type: Boolean as PropType<boolean>, default: false},
    small: {type: Boolean as PropType<boolean>, default: false},
    tabs: {type: Boolean as PropType<boolean>, default: false},
    navs: {type: Boolean as PropType<boolean>, default: false}
}