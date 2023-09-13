import {makeBoolean, makeProp, makeSize} from "@/composables";
import {ButtonSizes, HTMLInputTypes, ResponsiveNumbers} from "@/index";

export const InputProps = {
    //some actions vary based on type so considering at as a prop
    type: makeProp<HTMLInputTypes>('text', String),
    size: makeSize<ButtonSizes>(null),
    plain: makeBoolean(false),
    state: makeBoolean(null),
    modelValue: makeProp<number | string>(null, [Number, String])
};

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

