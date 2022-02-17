import {makeBoolean, makeString} from "./properties.js";

export default {
    tag: makeString("ul"),
    align: makeString(null),
    vertical: makeBoolean(false),
    pills: makeBoolean(false),
    fill: makeBoolean(false),
    justified: makeBoolean(false),
    small: makeBoolean(false),
    tabs: makeBoolean(false),
    navs: makeBoolean(false)
}