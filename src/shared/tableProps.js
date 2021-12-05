import {make, makeBoolean, makeString} from "./properties.js";

export default {
    responsive: make([String, Boolean], false),
    variant: makeString(null),
    striped: makeBoolean(false),
    hover: makeBoolean(false),
    active: makeBoolean(false),
    bordered: makeBoolean(false),
    borderVariant: makeString(null),
    borderless: makeBoolean(false),
    small: makeBoolean(false),
    align: makeString(null),
    caption: makeString(null),
    captionTop: makeBoolean(false)
}