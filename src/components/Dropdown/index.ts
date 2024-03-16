import {
    ButtonSizes,
    ColorVariants,
    DropdownAlignments,
    DropdownDirections,
    HasTag
} from "@/index";
import {RouteRecordRaw} from "vue-router";

export {default as Dropdown} from "./Dropdown.vue";
export {default as DropdownButton} from "./DropdownButton.vue";
export {default as DropdownDivider} from "./DropdownDivider.vue";
export {default as DropdownGroup} from "./DropdownGroup.vue";
export {default as DropdownHeader} from "./DropdownHeader.vue";
export {default as DropdownItem} from "./DropdownItem.vue";
export {default as DropdownMenu} from "./DropdownMenu.vue";

export interface DropdownMenuProps {
    tag?: keyof HTMLElementTagNameMap,
    dark?: boolean
    show?: boolean
    block?: boolean
}

export interface DropdownButtonPropsInterface {
    active?: boolean,
    disabled?: boolean,
}

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


export interface DropdownGroupPropsInterface {
    header?: string,
    headerTag?: keyof HTMLElementTagNameMap,
    headerWrapper?: keyof HTMLElementTagNameMap
}

export interface DropdownHeaderProps extends HasTag {
    wrapper?: keyof HTMLElementTagNameMap;
}

export interface DropdownItemProps extends HasTag {
    href?: string;
    to?: RouteRecordRaw;
    noItemTag?: boolean;
    active?: boolean;
    disabled?: boolean;
    isText?: boolean;
    itemTag?: keyof HTMLElementTagNameMap;
}