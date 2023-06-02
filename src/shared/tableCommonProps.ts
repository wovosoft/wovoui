import type {VerticalAlign} from "@/types";
import {makeBoolean, makeProp, makeVariant} from "@/composables";

export default {
    /**
     * Sets table variant
     */
    variant: makeVariant(),

    /**
     * Sets table status active
     */
    active: makeBoolean(false),

    /**
     * Table alignment
     */
    align: makeProp<VerticalAlign>(null, String),
}