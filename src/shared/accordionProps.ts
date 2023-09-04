import {makeBoolean, makeNumber, makeTag} from "@/composables";

export default {
    tag: makeTag("div"),
    modelValue: makeNumber(),
    flush: makeBoolean(false),
    alwaysOpen: makeBoolean(false)
}