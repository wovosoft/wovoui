import {ClassType, DropdownPropsInterface, HasTag} from "@/components";
import {RendererElement} from "@vue/runtime-core";
import {type ButtonSizes, ColorVariants, ResponsiveSizes} from "@/index";
import {AnchorHTMLAttributes} from "vue";
import {RouteLocationRaw, RouteRecordRaw} from "vue-router";
import type {Icons} from "@wovosoft/wovoui-icons";

export {default as Link} from "./Link.vue";
export {default as Menu} from "./Menu.vue";
export {default as Nav} from "./Nav.vue";
export {default as Navbar} from "./Navbar.vue";
export {default as NavbarBrand} from "./NavbarBrand.vue";
export {default as NavbarNav} from "./NavbarNav.vue";
export {default as NavbarToggler} from "./NavbarToggler.vue";
export {default as NavItem} from "./NavItem.vue";
export {default as NavItemDropdown} from "./NavItemDropdown.vue";
export {default as NavLink} from "./NavLink.vue";
export {default as PanelMenu} from "./PanelMenu.vue";
export {default as Pagination} from "./Pagination.vue";
export {default as PageItem} from "./PageItem.vue";
export {default as PageLink} from "./PageLink.vue";

export interface NavItemDropdownPropsInterface extends DropdownPropsInterface {
    isNav?: boolean;
}

export interface ToastProps {
    /**
     * Note: Currently when lazy is set to true,
     * as soon as visible state is set to false,
     * the element unmounts immediately.
     *
     * TODO: needs further investigation if this approach is okay or not.
     */
    lazy?: boolean;

    /**
     * Visibility State
     */
    show?: boolean;

    /**
     * Fade Class
     */
    fade?: boolean;

    /**
     * Visibility State
     */
    modelValue?: boolean;

    /**
     * Toast Header
     */
    header?: string;

    /**
     * Toggling body
     */
    noBody?: boolean;

    /**
     * Toggling close button
     */
    noCloseButton?: boolean;

    /**
     * Toast Body Classes
     */
    bodyClass?: ClassType;

    /**
     * Color Variants
     */
    variant?: ColorVariants;

    /**
     * teleporting to a different location
     *
     */
    to?: string | RendererElement | null | undefined;

    /**
     * @description props {to} should be used in lieu of container props
     * @deprecated will be removed in next version
     */
    container?: string | RendererElement | null | undefined;

    /**
     * Auto Hide timeout value in seconds.
     * When time value is set to 0|null|undefined,
     * then toast remains active forever.
     *
     * @default 3
     */
    timeout?: number;
}

export interface NavProps extends HasTag {
    align?: string;
    vertical?: boolean;
    pills?: boolean;
    fill?: boolean;
    justified?: boolean;
    small?: boolean;
    tabs?: boolean;
    navs?: boolean;
}

export interface NavbarNavProps extends NavProps {
    scrollHeight?: string | number;
    scrollable?: boolean;
}

export interface LinkProps {
    href?: string;
    target?: AnchorHTMLAttributes['target'];
}

export interface NavbarProps {
    brand?: string;
    brandUrl?: string;
    fluid?: boolean;
    size?: ResponsiveSizes;
    toggleEnabled?: boolean;
    variant?: 'dark' | 'light';
    bgVariant?: ColorVariants;
    fixed?: 'top' | 'bottom';
    sticky?: 'top' | 'bottom';
    expandsOn?: ResponsiveSizes | ResponsiveSizes[];
}

export interface NavbarBrandProps extends HasTag {
    href?: AnchorHTMLAttributes['href'];
}

export interface NavItemProps extends HasTag {
    href?: AnchorHTMLAttributes['href'];
    linkTag?: keyof HTMLElementTagNameMap;
    ariaCurrent?: string;
    to?: RouteLocationRaw;
    target?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface NavLinkProps extends HasTag {
    ariaCurrent?: string;
    active?: boolean;
    disabled?: boolean;
    href?: AnchorHTMLAttributes['href'];
    target?: AnchorHTMLAttributes['target'];
    to?: RouteRecordRaw;
}

export interface PageItemProps extends HasTag {
    linkTag?: keyof HTMLElementTagNameMap;
    href?: AnchorHTMLAttributes['href'];
    prev?: boolean;
    next?: boolean;
    ariaLabel?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface PageLinkProps extends HasTag {
    href?: AnchorHTMLAttributes['href'];
    prev?: boolean;
    next?: boolean;
    prevText?: string;
    nextText?: string;
    ariaLabel?: string;
}

export interface PaginationProps extends HasTag {
    modelValue?: number;

    totalRows?: number;
    perPage?: number;
    currentPage?: number;

    size?: ButtonSizes;
    align?: 'center' | 'end' | 'right' | null;

    firstColPageCount?: number;
    centerColPageCount?: number;
    lastColPageCount?: number;
}

export interface MenuItem {
    text: string;
    to?: RouteRecordRaw;
    href?: string;
    children?: MenuItem[];
    icon?: Icons;
    handler?: (item: MenuItem, index: number) => void;
}

export interface PanelMenuProps {
    modelValue?: number;
    items: MenuItem[];
    triggerVariant?: ColorVariants;
    menuVariant?: ColorVariants;
    itemClickPrevent?: boolean;
}