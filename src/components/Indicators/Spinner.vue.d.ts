import { DefineComponent, VNode } from 'vue';
import type { EmitFn } from '@/index';
import { SpinnerProps } from './index';

export interface SpinnerSlots {
    /**
     * Default slot for custom spinner content (typically screen reader text)
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Spinner component.
 */
export interface SpinnerEmitsOptions {
}

export declare type SpinnerEmits = EmitFn<SpinnerEmitsOptions>;

/**
 * Spinner component for displaying loading indicators with various styles and sizes.
 * Supports both border and grow animations.
 * 
 * Features:
 * - Two animation types: border (default) and grow
 * - Multiple size variants (sm, lg)
 * - Color variant support
 * - Accessible with proper role and screen reader text
 * - Customizable HTML tag
 * 
 * @example
 * ```vue
 * <Spinner variant="primary" size="sm" />
 * <Spinner grow variant="secondary" />
 * <Spinner tag="span" variant="info" size="lg" />
 * ```
 */
declare const Spinner: DefineComponent<SpinnerProps, SpinnerSlots, SpinnerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Spinner: DefineComponent<SpinnerProps, SpinnerSlots, SpinnerEmits>;
    }
}

export default Spinner;