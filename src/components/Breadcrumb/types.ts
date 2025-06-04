/**
 * Type definitions for Breadcrumb components
 */

import type {HasColorVariant, HasTag} from '@/components';
import type {ButtonSizes, ColorVariants} from '@/index';

/**
 * Props interface for the Breadcrumb component.
 */
export interface BreadcrumbProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for Breadcrumb
}

/**
 * Slot definitions for Breadcrumb component
 */
export interface BreadcrumbSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for Breadcrumb component
 */
export interface BreadcrumbEmits {
  // TODO: Add specific emits for Breadcrumb
}

/**
 * Props interface for the BreadcrumbItem component.
 */
export interface BreadcrumbItemProps extends HasTag, HasColorVariant {
  // TODO: Add specific props for BreadcrumbItem
}

/**
 * Slot definitions for BreadcrumbItem component
 */
export interface BreadcrumbItemSlots {
  /**
   * Default slot
   */
  default(props: {}): any;
}

/**
 * Emit definitions for BreadcrumbItem component
 */
export interface BreadcrumbItemEmits {
  // TODO: Add specific emits for BreadcrumbItem
}