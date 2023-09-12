import {makeBoolean, makeProp, makeSize, makeString, makeTag} from "@/composables";
import {ButtonSizes, HTMLInputTypes, ResponsiveNumbers} from "@/index";

export const FormGroupProps = {
    tag: makeTag("div"),
    floating: makeBoolean(false),
    label: makeString(),
    labelFor: makeString(),
    horizontal: makeBoolean(false),
    labelSm: makeProp<ResponsiveNumbers>(null, Number),
    labelMd: makeProp<ResponsiveNumbers>(null, Number),
    labelLg: makeProp<ResponsiveNumbers>(null, Number),
    labelXl: makeProp<ResponsiveNumbers>(null, Number),
    contentSm: makeProp<ResponsiveNumbers>(null, Number),
    contentMd: makeProp<ResponsiveNumbers>(null, Number),
    contentLg: makeProp<ResponsiveNumbers>(null, Number),
    contentXl: makeProp<ResponsiveNumbers>(null, Number),
    noMarginBottom: makeBoolean(false),
    //form control feedback messages
    validFeedback: makeString(),
    invalidFeedback: makeString(),
};

export const InputProps = {
    //some actions vary based on type so considering at as a prop
    type: makeProp<HTMLInputTypes>('text', String),
    size: makeSize<ButtonSizes>(null),
    plain: makeBoolean(false),
    state: makeBoolean(null),
    modelValue: makeProp<number | string>(null, [Number, String])
};