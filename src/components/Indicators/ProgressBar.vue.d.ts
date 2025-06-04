import { DefineComponent, VNode } from 'vue';
import type { EmitFn } from '@/index';
import { ProgressBarProps } from './index';

export interface ProgressBarSlots {
    /**
     * Default slot for custom progress bar content (typically shows percentage)
     */
    default(): VNode[];
}

/**
 * Defines valid emits in ProgressBar component.
 */
export interface ProgressBarEmitsOptions {
}

export declare type ProgressBarEmits = EmitFn<ProgressBarEmitsOptions>;

/**
 * ProgressBar component for displaying individual progress bar elements.
 * Typically used within a Progress component but can be used standalone.
 * 
 * Features:
 * - Configurable min/max values
 * - Color variants support
 * - Striped and animated styling
 * - Accessible with proper ARIA attributes
 * - Optional value display
 * 
 * @example
 * ```vue
 * <ProgressBar :value="75" variant="success" striped animated />
 * <ProgressBar :value="30" :min="0" :max="100" variant="warning" />
 * ```
 */
declare const ProgressBar: DefineComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ProgressBar: DefineComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits>;
    }
}

export default ProgressBar;