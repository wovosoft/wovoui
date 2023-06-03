import type {Placement} from "@popperjs/core";
import type {Icons} from "@wovosoft/wovoui-icons/dist/types";
import {Ref} from "vue";

export type TextAlign = 'start' | 'center' | 'end';
export type TextVariants =
    'muted'
    | 'white-50'
    | 'black-50'
    | 'white'
    | 'opacity-75'
    | 'opacity-50'
    | 'opacity-20'
    | 'black';

export type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type JustifyAlignment = TextAlign | "between" | "around" | "evenly";
export type ItemAlignment = TextAlign | "baseline" | "stretch";
export type AlignContent = TextAlign | "between" | "around" | "stretch";
export type Order = 0 | 1 | 2 | 3 | 4 | 5 | 'first' | 'last';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export declare type VariationPlacement =
    "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
export type AspectRatios = '1x1' | '4x3' | '16x9' | '21x9';
export type ResponsiveNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSizes = ResponsiveNumbers | null | boolean | 'auto';
export type ColAlignments = 'start' | 'center' | 'end';
export type JustifyContentAlignments = ColAlignments | 'around' | 'between' | 'evenly';
export type ColOrders = ResponsiveNumbers | 'first' | 'last';
export type ResponsiveSizes = "sm" | "md" | "lg" | "xl" | "xxl";
export type ModalSizes = "sm" | "lg" | "xl" | null;
export type ModalFullScreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';
export type ButtonSizes = 'sm' | 'lg';
export type PlaceholderSizes = ButtonSizes | 'xs';
export type FeedbackTypes = 'valid' | 'invalid';
export type BadgePositions = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type HTMLInputTypes = "button" | "checkbox" | "color" | "date"
    | "datetime-local" | "email" | "file" | "hidden" | "image" | "month"
    | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit"
    | "tel" | "text" | "time" | "url" | "week";

export type ToastPlacements =
    'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center'
    | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type DropdownDirections = "right" | "left" | "top" | "bottom" | null;
export type DropdownAlignments =
    | "start"
    | "end"
    | "sm-start"
    | "sm-end"
    | "md-start"
    | "md-end"
    | "lg-start"
    | "lg-end"
    | "xl-start"
    | "xl-end"
    | "xxl-start"
    | "xxl-end"
    | Placement;

export type ClassTypes = string | string[] | object | object[];

export interface MenuItem {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[];
    icon?: Icons;
    handler?: (item: MenuItem, index: number) => void;
}


export type setActiveItem = (item: Ref<boolean>) => void
export type registerItem = (item: Ref<boolean>) => void

export * from "@/index";

declare module "vue" {
    // tells Vue about a custom global property/method
    interface ComponentCustomProperties {

    }

    // tells Vue about a custom component registered globally in the plugin
    interface GlobalComponents {

    }
}