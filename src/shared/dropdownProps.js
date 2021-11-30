import {make, makeBoolean, makeString} from "./properties.js";

export default {
    tag: makeString("div"),
    menuTag: makeString("ul"),
    toggleTag: makeString("button"),
    size: makeString(),
    text: makeString(),
    variant: makeString("secondary"),
    block: makeBoolean(false),
    disabled: makeBoolean(false),
    /**
     * left,right,up, down=null (default)
     */
    dir: makeString("bottom"),
    align: makeString("start"),
    menuDark: makeBoolean(false),
    menuClass: make([String, Array], [])
}