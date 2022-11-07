import {PropType} from "vue";
import type {ColorVariants} from "../types";

export const makeProp = <TT>(initial: TT = null, VT: Function | Function[]) => ({
    type: VT as PropType<TT>,
    default: initial
});

export const makeVariant = (initial: ColorVariants = 'secondary') =>
    makeProp<ColorVariants>(initial, String)

export const makeSize = <T>(initial: T = null) => makeProp<T>(initial, String);

export const makeBoolean = (initial: boolean = false) => ({
    type: Boolean as PropType<boolean>,
    default: () => initial
});

export const makeString = (initial: string = null) => ({
    type: String as PropType<string>,
    default: () => initial
});

export const makeTag = (initial: keyof HTMLElementTagNameMap = "div") => ({
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: () => initial
});

export const makeNumber = (initial: number = null) => ({
    type: Number as PropType<number>,
    default: () => initial
});

export const makeClass = (initial: any = null) => ({
    type: [Array, Object, String] as PropType<any>,
    default: () => initial
});