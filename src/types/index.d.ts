export type TextAlign = 'start' | 'center' | 'end';
export type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type JustifyAlignment = TextAlign | "between" | "around" | "evenly";
export type ItemAlignment = TextAlign | "baseline" | "stretch";
export type AlignContent = TextAlign | "between" | "around" | "stretch";
export type Order = 0 | 1 | 2 | 3 | 4 | 5 | 'first' | 'last';
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
export type {
    responsiveNumbers,
    ColSizes,
    colAlignments,
    justifyContentAlignments,
    colOrders,
    responsiveSizes,
    modalSizes
} from "./responsiveLayoutSizes";
export type modalFullScreen = true | false | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';
export type ButtonSizes = 'sm' | 'lg';
export type FeedbackTypes = 'valid' | 'invalid';
export type BadgePositions = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type HTMLInputTypes =
    "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";