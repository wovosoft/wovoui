import {ColorVariants} from "@/index";

export function btnVariant(variant: ColorVariants, isOutline: boolean = false) {
    return "btn-" + (isOutline ? "outline-" : "") + variant;
}