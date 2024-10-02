import {
    AspectRatios,
    BadgePositions,
    ColorVariants,
    PlaceholderSizes,
    ResponsiveNumbers
} from "@/index";
import type {Icons} from "@wovosoft/wovoui-icons";

export {default as Placeholder} from "./Placeholder.vue";
export {default as Aspect} from "./Aspect.vue";
export {default as Vr} from "./Vr.vue";
export {default as Figure} from "./Figure.vue";
export {default as Icon} from "./Icon.vue";
export {default as Badge} from "./Badge.vue";

export interface PlaceholderProps {
    /**
     * @description Wrapper Tag
     * @type string
     * @default div
     */
    tag?: keyof HTMLElementTagNameMap;

    /**
     * @description Placeholder Animation
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    glow?: boolean;

    /**
     * @description Placeholder Animation
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    wave?: boolean;

    /**
     * @description Placeholder Animation. Props glow or wave can be used.
     * @type string
     * @supported 'glow'|'wave'
     * @default null
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    animation?: 'glow' | 'wave';

    /**
     * @description Defines Placeholder Size
     * @type string
     * @default null
     * @supported 'lg' | 'sm' | 'xs'
     */
    size?: PlaceholderSizes;

    /**
     * Placeholder width can be set by css utility classes or inline styles
     * e.g. w-75, w-100, width:75% etc
     *
     * @description Sets placeholder width with bootstrap supported responsive layout sizes
     * @default null
     */
    col?: ResponsiveNumbers;

    /**
     * @description Sets Background Color Variants
     * @type string
     * @default null
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#color
     */
    variant?: ColorVariants
}

export interface IconProps {
    /**
     * Icon Tag
     * Suggested : i, span
     * @default i
     */
    tag?: keyof HTMLElementTagNameMap;

    /**
     * Name of the bootstrap icon
     * @link https://icons.getbootstrap.com/
     */
    icon?: Icons;
}

export interface FigureProps {
    /**
     * Figure Caption
     */
    caption?: string;

    /**
     * Figure Image URL
     */
    imgUrl?: string;

    /**
     * Defines if figure should be fluid or not
     */
    imgFluid?: boolean;

    /**
     * Alternative value for figure image
     */
    imgAlt?: string;
}

export interface BadgeProps {
    /**
     * Wrapper Tag
     * @default span
     */
    tag?: keyof HTMLElementTagNameMap;

    /**
     * Color Variants
     * Uses Bootstrap supported text-bg-*variant classes
     * @link https://getbootstrap.com/docs/5.2/components/badge/#background-colors
     */
    variant?: ColorVariants;

    /**
     * Text Color Variants
     * Uses Bootstrap supported text-*variant classes
     * @link https://getbootstrap.com/docs/5.2/utilities/colors/#how-it-works
     */
    textVariant?: ColorVariants;

    /**
     * Background Color Variants
     * Uses Bootstrap Supported bg-*variant classes
     * @link https://getbootstrap.com/docs/5.2/utilities/background/
     */
    bgVariant?: ColorVariants;

    /**
     * Generates Pill Badges
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/badge/#pill-badges
     */
    pill?: boolean;

    /**
     * When provided, the badge will be an anchor link
     */
    href?: string;

    /**
     * Sets position of the badge wrt. its parent,
     * parent element should have positioned relative
     * @supported 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
     * @link https://getbootstrap.com/docs/5.2/components/badge/#positioned
     */
    position?: BadgePositions;

    /**
     * Default content for default slot
     */
    content?: string | number;
}


export interface AspectProps {
    /**
     * Wrapper Tag.
     * @default div
     */
    tag?: keyof HTMLElementTagNameMap;
    /**
     * Any Bootstrap 5 supported ratio component's css values.
     * The supported values are '1x1' | '4x3' | '16x9' | '21x9'
     * @default "16x9"
     *
     * More Info can be found at
     * @link https://getbootstrap.com/docs/5.2/helpers/ratio/
     *
     * Bootstrap Supports dynamic ratios. This component also supports dynamic ratios.
     * Any valid numeric values will be directly used as Number%
     * and any ratio such as MxN will be converted to (N/M*100)%.
     * Check out more details at
     * @link https://getbootstrap.com/docs/5.2/helpers/ratio/#custom-ratios
     */
    ratio?: AspectRatios;
}