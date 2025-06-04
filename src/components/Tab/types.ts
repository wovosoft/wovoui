/**
 * Type definitions for Tab components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';

/**
 * Props interface for the Tab component.
 */
export interface TabProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for Tab
}

/**
 * Slot definitions for Tab component
 */
export interface TabSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for Tab component
 */
export interface TabEmits {
  // TODO: Add specific emits for Tab
}

/**
 * Props interface for the TabContent component.
 */
export interface TabContentProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for TabContent
}

/**
 * Slot definitions for TabContent component
 */
export interface TabContentSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for TabContent component
 */
export interface TabContentEmits {
  // TODO: Add specific emits for TabContent
}

/**
 * Props interface for the Tabs component.
 */
export interface TabsProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for Tabs
}

/**
 * Slot definitions for Tabs component
 */
export interface TabsSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for Tabs component
 */
export interface TabsEmits {
  // TODO: Add specific emits for Tabs
}