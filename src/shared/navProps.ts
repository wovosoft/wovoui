import {makeBoolean, makeString, makeTag} from "../composables/useProps";

export default {
    tag: makeTag("ul"),
    align: makeString(),
    vertical: makeBoolean(false),
    pills: makeBoolean(false),
    fill: makeBoolean(false),
    justified: makeBoolean(false),
    small: makeBoolean(false),
    tabs: makeBoolean(false),
    navs: makeBoolean(false)
}