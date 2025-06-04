/**
 * Type definitions for ListGroup components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';

/**
 * Props interface for the ListGroup component.
 */
export interface ListGroupProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for ListGroup
}

/**
 * Slot definitions for ListGroup component
 */
export interface ListGroupSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ListGroup component
 */
export interface ListGroupEmits {
  // TODO: Add specific emits for ListGroup
}

/**
 * Props interface for the ListGroupItem component.
 */
export interface ListGroupItemProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for ListGroupItem
}

/**
 * Slot definitions for ListGroupItem component
 */
export interface ListGroupItemSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for ListGroupItem component
 */
export interface ListGroupItemEmits {
  // TODO: Add specific emits for ListGroupItem
}