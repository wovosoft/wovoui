/**
 * Type definitions for Indicators components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes} from '@/index';

/**
 * Props interface for the Progress component.
 * Extends ProgressBarProps with additional container-specific properties.
 */
export interface ProgressProps extends HasTag, HasColorVariant {
    /**
     * Current progress value (0-100)
     * @default 0
     */
    value?: number;

    /**
     * Minimum value for the progress bar
     * @default 0
     */
    min?: number;

    /**
     * Maximum value for the progress bar
     * @default 100
     */
    max?: number;

    /**
     * Whether to show the progress value as text
     * @default true
     */
    showValue?: boolean;

    /**
     * Whether to apply striped styling to the progress bar
     * @default false
     */
    striped?: boolean;

    /**
     * Whether to animate the striped progress bar
     * Only effective when striped is true
     * @default false
     */
    animated?: boolean;

    /**
     * HTML tag to use for the progress bar container element
     * @default 'div'
     */
    barTag?: keyof HTMLElementTagNameMap;

    /**
     * Height of the progress container
     * Can be a number (pixels) or a CSS string value
     */
    height?: string | number;
}

/**
 * Props interface for the ProgressBar component.
 * Provides properties for controlling progress bar appearance and behavior.
 */
export interface ProgressBarProps extends HasTag, HasColorVariant {
    /**
     * Current progress value (0-100)
     * @default 0
     */
    value?: number;

    /**
     * Minimum value for the progress bar
     * @default 0
     */
    min?: number;

    /**
     * Maximum value for the progress bar
     * @default 100
     */
    max?: number;

    /**
     * Whether to show the progress value as text
     * @default true
     */
    showValue?: boolean;

    /**
     * Whether to apply striped styling to the progress bar
     * @default false
     */
    striped?: boolean;

    /**
     * Whether to animate the striped progress bar
     * Only effective when striped is true
     * @default false
     */
    animated?: boolean;
}

/**
 * Props interface for the Spinner component.
 * Provides properties for controlling spinner appearance and animation.
 */
export interface SpinnerProps extends HasTag, HasColorVariant {
    /**
     * Whether to use the grow animation instead of border animation
     * @default false
     */
    grow?: boolean;

    /**
     * Size variant for the spinner
     * Can be 'sm' for small or 'lg' for large
     */
    size?: ButtonSizes;
}

export {default as Progress} from "./Progress.vue";
export {default as ProgressBar} from "./ProgressBar.vue";
export {default as Spinner} from "./Spinner.vue";
