import {ButtonHTMLAttributes, VNode} from 'vue';
import {ClassComponent, GlobalComponentConstructor} from './ts-helpers';

import {ColorVariants} from "./colorVariants";
import {buttonSizes} from "./buttonSizes";
import {TrueFalse} from "./index";
import {badgePositions} from "./badgePositions";


export interface ButtonProps extends ButtonHTMLAttributes {
    style?: any;
    variant?: ColorVariants;
    tag?: string;
    href?: string;
    size?: buttonSizes;
    outline?: TrueFalse;
    block?: TrueFalse;
    pill?: TrueFalse;
    squared?: TrueFalse;
    disabled?: TrueFalse;
    pressed?: TrueFalse;
    badge?: string | number;
    badePosition?: badgePositions;
    badgeVariant: ColorVariants;
    active: TrueFalse;
    activeClass: string;
}

export interface ButtonSlots {
    default: () => VNode[];
}

export declare type ButtonEmits = {}

declare class Button extends ClassComponent<ButtonProps, ButtonSlots, ButtonEmits> {
}

declare module '@wovosoft/wovoui' {
    interface GlobalComponents {
        Button: GlobalComponentConstructor<Button>
    }
}


export default Button;