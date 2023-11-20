import {ButtonSizes, ColorVariants} from "@/index";
import {InjectionKey} from "vue";

export {default as Button} from "./Button.vue";
export {default as ButtonClose} from "./ButtonClose.vue";
export {default as ButtonGroup} from "./ButtonGroup.vue";
export {default as ButtonToolbar} from "./ButtonToolbar.vue";

export interface ButtonProps {
    tag?: keyof HTMLElementTagNameMap,
    href?: string
    variant?: ColorVariants
    size?: ButtonSizes
    type?: 'button' | 'submit'
    outline?: boolean
    block?: boolean
    pill?: boolean
    squared?: boolean
    disabled?: boolean
    pressed?: boolean
    noWrap?: boolean
    link?: boolean
    active?: boolean
    activeClass?: string
    /**
     * when wants to manage active state of the button
     */
    manageActiveState?: boolean
    noStyle?: boolean
}

export interface ButtonCloseProps {
    size?: ButtonSizes
    white?: boolean
    ariaLabel?: string
    disabled?: boolean
}

export interface ButtonToolbarProps {
    tag?: keyof HTMLElementTagNameMap
    role?: string
    justified?: boolean
}

export interface ButtonGroupProps {
    tag?: keyof HTMLElementTagNameMap
    ariaLabel?: string
    size?: ButtonSizes
    vertical?: boolean
    justified?: boolean
    outline?: boolean
    role?: string
}

export const ButtonGroupOutlinedInjection = Symbol('outline') as InjectionKey<boolean>;