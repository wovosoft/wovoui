import {makeBoolean, makeNumber, makeTag} from "../composables/useProps";

export default {
    tag: makeTag("div"),
    modelValue: makeNumber(),
    flush: makeBoolean(false),
    alwaysOpen: makeBoolean(false)
}