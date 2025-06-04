import { DefineComponent, VNode } from 'vue';
import type { EmitFn } from '@/index';
import { ProgressProps } from './index';

export interface ProgressSlots {
    /**
     * Default slot for custom progress bar content
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Progress component.
 */
export interface ProgressEmitsOptions {
}

export declare type ProgressEmits = EmitFn<ProgressEmitsOptions>;

/**
 * Progress component for displaying progress bars with customizable styling and behavior.
 * 
 * Features:
 * - Customizable height and styling
 * - Support for multiple progress bars
 * - Accessible with proper ARIA attributes
 * - Bootstrap-compatible styling
 * 
 * @example
 * ```vue
 * <Progress :value="50" variant="primary" height="20px" />
 * <Progress :value="75" variant="success" striped animated />
 * ```
 */
declare const Progress: DefineComponent<ProgressProps, ProgressSlots, ProgressEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Progress: DefineComponent<ProgressProps, ProgressSlots, ProgressEmits>;
    }
}

export default Progress;