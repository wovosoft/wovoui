/**
 * Type definitions for Button components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';

/**
 * Props interface for the Button component.
 */
export interface ButtonProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for Button
}

/**
 * Slot definitions for Button component
 */
export interface ButtonSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for Button component
 */
export interface ButtonEmits {
  // TODO: Add specific emits for Button
}

/**
 * Props interface for the ButtonClose component.
 */
export interface ButtonCloseProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for ButtonClose
}

/**
 * Slot definitions for ButtonClose component
 */
export interface ButtonCloseSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ButtonClose component
 */
export interface ButtonCloseEmits {
  // TODO: Add specific emits for ButtonClose
}

/**
 * Props interface for the ButtonGroup component.
 */
export interface ButtonGroupProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for ButtonGroup
}

/**
 * Slot definitions for ButtonGroup component
 */
export interface ButtonGroupSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ButtonGroup component
 */
export interface ButtonGroupEmits {
  // TODO: Add specific emits for ButtonGroup
}

/**
 * Props interface for the ButtonToolbar component.
 */
export interface ButtonToolbarProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for ButtonToolbar
}

/**
 * Slot definitions for ButtonToolbar component
 */
export interface ButtonToolbarSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ButtonToolbar component
 */
export interface ButtonToolbarEmits {
  // TODO: Add specific emits for ButtonToolbar
}