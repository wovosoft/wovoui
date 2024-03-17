import {ButtonSizes, HTMLInputTypes, ResponsiveNumbers} from "@/index";

export interface InputPropsInterface {
    //some actions vary based on type so considering at as a prop
    type?: HTMLInputTypes,
    size?: ButtonSizes,
    plain?: boolean,
    state?: boolean,
    modelValue: number | string
}

export interface FormGroupPropsInterface {
    tag?: keyof HTMLElementTagNameMap,
    floating?: boolean,
    label?: string,
    labelFor?: string,
    horizontal?: boolean,
    labelSm?: ResponsiveNumbers,
    labelMd?: ResponsiveNumbers,
    labelLg?: ResponsiveNumbers,
    labelXl?: ResponsiveNumbers,
    contentSm?: ResponsiveNumbers,
    contentMd?: ResponsiveNumbers,
    contentLg?: ResponsiveNumbers,
    contentXl?: ResponsiveNumbers,
    noMarginBottom?: boolean,
    //form control feedback messages
    validFeedback?: string,
    invalidFeedback?: string,
}

