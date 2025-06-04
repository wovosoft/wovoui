/**
 * Type definitions for Alert components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';

/**
 * Props interface for the Alert component.
 */
export interface AlertProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for Alert
}

/**
 * Slot definitions for Alert component
 */
export interface AlertSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for Alert component
 */
export interface AlertEmits {
  // TODO: Add specific emits for Alert
}

/**
 * Props interface for the AlertHeading component.
 */
export interface AlertHeadingProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for AlertHeading
}

/**
 * Slot definitions for AlertHeading component
 */
export interface AlertHeadingSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for AlertHeading component
 */
export interface AlertHeadingEmits {
  // TODO: Add specific emits for AlertHeading
}

/**
 * Props interface for the AlertLink component.
 */
export interface AlertLinkProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for AlertLink
}

/**
 * Slot definitions for AlertLink component
 */
export interface AlertLinkSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for AlertLink component
 */
export interface AlertLinkEmits {
  // TODO: Add specific emits for AlertLink
}