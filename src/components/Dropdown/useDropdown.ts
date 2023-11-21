import {ButtonSizes, ColorVariants, DropdownAlignments, DropdownDirections} from "@/index";

export interface DropdownPropsInterface {
    tag?: keyof HTMLElementTagNameMap,
    menuTag?: keyof HTMLElementTagNameMap,
    toggleTag?: keyof HTMLElementTagNameMap,
    size?: ButtonSizes,
    text?: string | null,
    variant?: ColorVariants,
    splitVariant?: ColorVariants,
    block?: boolean,
    disabled?: boolean,
    /**
     * left,right,up, down=null (default)
     */
    dir?: DropdownDirections | null,
    align?: DropdownAlignments,
    menuDark?: boolean,
    menuClass?: string | object | any[] | null,

    split?: boolean,
    isNav?: boolean,
    disableInnerClicks?: boolean,
    menuProps?: any,
    toggleProps?: any,
}

export interface DropdownButtonPropsInterface {
    active?: boolean,
    disabled?: boolean,
}

export interface DropdownGroupPropsInterface {
    header?: string,
    headerTag?: keyof HTMLElementTagNameMap,
    headerWrapper?: keyof HTMLElementTagNameMap
}