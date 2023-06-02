import {PropType} from "vue";
import type {ColorVariants, TextVariants} from "@/types";

export const makeProp = <TT>(initial: TT | null = null, VT: Function | Function[]) => ({
    type: VT as PropType<TT>,
    default: () => initial
});

export const makeVariant = (initial: ColorVariants | null = null) =>
    makeProp<ColorVariants>(initial, String)

export const makeTextVariant = (initial: TextVariants | null) =>
    makeProp<TextVariants>(initial, String)

export const makeSize = <T>(initial: T | null = null) => makeProp<T>(initial, String);

export const makeBoolean = (initial: boolean | null = false) => ({
    type: Boolean as PropType<boolean>,
    default: (): boolean | null => initial
});

export const makeString = (initial: string | null = null) => ({
    type: String as PropType<string>,
    default: (): typeof initial => initial
});

export const makeTag = (initial: keyof HTMLElementTagNameMap = "div") => ({
    type: String as PropType<typeof initial>,
    default: (): typeof initial => initial
});

export const makeNumber = (initial: number | null = null) => ({
    type: Number as PropType<typeof initial>,
    default: (): typeof initial => initial
});
export const makeRole = (initial: string | null = null) => ({
    type: String as PropType<'presentation' | 'group' | 'tooltip'>,
    default: (): typeof initial => initial
});

export const makeClass = (initial: any = null) => ({
    type: [Array, Object, String] as PropType<typeof initial>,
    default: (): typeof initial => initial
});