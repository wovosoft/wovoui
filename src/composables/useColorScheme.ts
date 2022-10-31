import {ColorVariants} from "../types";

export function btnVariant(variant: ColorVariants, isOutline: boolean = false) {
    return "btn-" + (isOutline ? "outline-" : "") + variant;
}