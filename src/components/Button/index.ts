import {ButtonSizes, ColorVariants, HasTag} from "@/index";
import {AnchorHTMLAttributes, ButtonHTMLAttributes, InjectionKey, VNode} from "vue";

export {default as Button} from "./Button.vue";
export {default as ButtonClose} from "./ButtonClose.vue";
export {default as ButtonGroup} from "./ButtonGroup.vue";
export {default as ButtonToolbar} from "./ButtonToolbar.vue";

export interface ButtonProps extends HasTag {
    href?: AnchorHTMLAttributes['href'];
    variant?: ColorVariants;
    size?: ButtonSizes;
    type?: ButtonHTMLAttributes['type'];
    outline?: boolean;
    block?: boolean;
    pill?: boolean;
    squared?: boolean;
    disabled?: boolean;
    pressed?: boolean;
    noWrap?: boolean;
    link?: boolean;
    active?: boolean;
    activeClass?: string;
    /**
     * when wants to manage active state of the button
     */
    manageActiveState?: boolean;
    noStyle?: boolean;
    content?: string | VNode;
}

export interface ButtonClosePropsInterface {
    size?: ButtonSizes
    white?: boolean
    ariaLabel?: string
    disabled?: boolean
}

export interface ButtonToolbarPropsInterface extends HasTag {
    role?: string
    justified?: boolean
}

export interface ButtonGroupPropsInterface extends HasTag {
    ariaLabel?: string
    size?: ButtonSizes
    vertical?: boolean
    justified?: boolean
    outline?: boolean
    role?: string
}

export const ButtonGroupOutlinedInjection = Symbol('outline') as InjectionKey<boolean>;