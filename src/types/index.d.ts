export type TextAlign = 'start' | 'center' | 'end';
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
export type responsiveNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSizes = responsiveNumbers | null | boolean | 'auto';
export type colAlignments = 'start' | 'center' | 'end';
export type justifyContentAlignments = colAlignments | 'around' | 'between' | 'evenly';
export type colOrders = responsiveNumbers | 'first' | 'last';
export type responsiveSizes = "sm" | "md" | "lg" | "xl" | "xxl";
export type modalSizes = "sm" | "lg" | "xl" | null;
export type modalFullScreen = boolean | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
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