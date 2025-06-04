/**
 * Global component type declarations for WovoUI
 * This file provides comprehensive type information for all components
 * enabling PhpStorm/WebStorm IDE support and global component registration
 */

import type { DefineComponent } from 'vue';

// Import all component types from their respective modules
import type {
  ProgressProps,
  ProgressSlots,
  ProgressEmits,
  ProgressBarProps,
  ProgressBarSlots,
  ProgressBarEmits,
  SpinnerProps,
  SpinnerSlots,
  SpinnerEmits
} from './components/Indicators/types';

// TODO: Import types from other component directories
// import type { ButtonProps, ButtonSlots, ButtonEmits } from './components/Button/types';
// import type { ModalProps, ModalSlots, ModalEmits } from './components/Modal/types';
// ... etc for all component directories

declare module 'vue' {
  export interface GlobalComponents {
    // Indicators Components
    /**
     * Progress component for displaying progress bars with customizable styling and behavior.
     * 
     * @example
     * ```vue
     * <Progress :value="50" variant="primary" height="20px" />
     * <Progress :value="75" variant="success" striped animated />
     * ```
     */
    Progress: DefineComponent<ProgressProps, ProgressSlots, ProgressEmits>;
    
    /**
     * ProgressBar component for displaying individual progress bar elements.
     * Typically used within a Progress component but can be used standalone.
     * 
     * @example
     * ```vue
     * <ProgressBar :value="75" variant="success" striped animated />
     * <ProgressBar :value="30" :min="0" :max="100" variant="warning" />
     * ```
     */
    ProgressBar: DefineComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits>;
    
    /**
     * Spinner component for displaying loading indicators with various styles and sizes.
     * Supports both border and grow animations.
     * 
     * @example
     * ```vue
     * <Spinner variant="primary" size="sm" />
     * <Spinner grow variant="secondary" />
     * <Spinner tag="span" variant="info" size="lg" />
     * ```
     */
    Spinner: DefineComponent<SpinnerProps, SpinnerSlots, SpinnerEmits>;

    // TODO: Add all other components here
    // Button Components
    // Button: DefineComponent<ButtonProps, ButtonSlots, ButtonEmits>;
    // ButtonGroup: DefineComponent<ButtonGroupProps, ButtonGroupSlots, ButtonGroupEmits>;
    // ButtonClose: DefineComponent<ButtonCloseProps, ButtonCloseSlots, ButtonCloseEmits>;
    // ButtonToolbar: DefineComponent<ButtonToolbarProps, ButtonToolbarSlots, ButtonToolbarEmits>;

    // Modal Components  
    // Modal: DefineComponent<ModalProps, ModalSlots, ModalEmits>;
    // ModalBody: DefineComponent<ModalBodyProps, ModalBodySlots, ModalBodyEmits>;
    // ModalHeader: DefineComponent<ModalHeaderProps, ModalHeaderSlots, ModalHeaderEmits>;
    // ModalFooter: DefineComponent<ModalFooterProps, ModalFooterSlots, ModalFooterEmits>;
    // ModalTitle: DefineComponent<ModalTitleProps, ModalTitleSlots, ModalTitleEmits>;

    // Alert Components
    // Alert: DefineComponent<AlertProps, AlertSlots, AlertEmits>;
    // AlertHeading: DefineComponent<AlertHeadingProps, AlertHeadingSlots, AlertHeadingEmits>;
    // AlertLink: DefineComponent<AlertLinkProps, AlertLinkSlots, AlertLinkEmits>;

    // Accordion Components
    // Accordion: DefineComponent<AccordionProps, AccordionSlots, AccordionEmits>;
    // AccordionItem: DefineComponent<AccordionItemProps, AccordionItemSlots, AccordionItemEmits>;
    // AccordionHeader: DefineComponent<AccordionHeaderProps, AccordionHeaderSlots, AccordionHeaderEmits>;
    // AccordionBody: DefineComponent<AccordionBodyProps, AccordionBodySlots, AccordionBodyEmits>;
    // Collapse: DefineComponent<CollapseProps, CollapseSlots, CollapseEmits>;

    // Card Components
    // Card: DefineComponent<CardProps, CardSlots, CardEmits>;
    // CardBody: DefineComponent<CardBodyProps, CardBodySlots, CardBodyEmits>;
    // CardHeader: DefineComponent<CardHeaderProps, CardHeaderSlots, CardHeaderEmits>;
    // CardFooter: DefineComponent<CardFooterProps, CardFooterSlots, CardFooterEmits>;
    // CardTitle: DefineComponent<CardTitleProps, CardTitleSlots, CardTitleEmits>;
    // CardSubTitle: DefineComponent<CardSubTitleProps, CardSubTitleSlots, CardSubTitleEmits>;
    // CardText: DefineComponent<CardTextProps, CardTextSlots, CardTextEmits>;
    // CardImg: DefineComponent<CardImgProps, CardImgSlots, CardImgEmits>;
    // CardLink: DefineComponent<CardLinkProps, CardLinkSlots, CardLinkEmits>;
    // CardGroup: DefineComponent<CardGroupProps, CardGroupSlots, CardGroupEmits>;

    // Form Components
    // Input: DefineComponent<InputProps, InputSlots, InputEmits>;
    // FormGroup: DefineComponent<FormGroupProps, FormGroupSlots, FormGroupEmits>;
    // FormLabel: DefineComponent<FormLabelProps, FormLabelSlots, FormLabelEmits>;
    // FormControl: DefineComponent<FormControlProps, FormControlSlots, FormControlEmits>;
    // Checkbox: DefineComponent<CheckboxProps, CheckboxSlots, CheckboxEmits>;
    // Radio: DefineComponent<RadioProps, RadioSlots, RadioEmits>;
    // Select: DefineComponent<SelectProps, SelectSlots, SelectEmits>;
    // Textarea: DefineComponent<TextareaProps, TextareaSlots, TextareaEmits>;
    // Calendar: DefineComponent<CalendarProps, CalendarSlots, CalendarEmits>;
    // Datepicker: DefineComponent<DatepickerProps, DatepickerSlots, DatepickerEmits>;
    // Timepicker: DefineComponent<TimepickerProps, TimepickerSlots, TimepickerEmits>;

    // Navigation Components
    // Nav: DefineComponent<NavProps, NavSlots, NavEmits>;
    // NavItem: DefineComponent<NavItemProps, NavItemSlots, NavItemEmits>;
    // NavLink: DefineComponent<NavLinkProps, NavLinkSlots, NavLinkEmits>;
    // Navbar: DefineComponent<NavbarProps, NavbarSlots, NavbarEmits>;
    // NavbarBrand: DefineComponent<NavbarBrandProps, NavbarBrandSlots, NavbarBrandEmits>;
    // NavbarNav: DefineComponent<NavbarNavProps, NavbarNavSlots, NavbarNavEmits>;
    // NavbarToggler: DefineComponent<NavbarTogglerProps, NavbarTogglerSlots, NavbarTogglerEmits>;
    // Pagination: DefineComponent<PaginationProps, PaginationSlots, PaginationEmits>;
    // PageItem: DefineComponent<PageItemProps, PageItemSlots, PageItemEmits>;
    // PageLink: DefineComponent<PageLinkProps, PageLinkSlots, PageLinkEmits>;

    // Dropdown Components
    // Dropdown: DefineComponent<DropdownProps, DropdownSlots, DropdownEmits>;
    // DropdownButton: DefineComponent<DropdownButtonProps, DropdownButtonSlots, DropdownButtonEmits>;
    // DropdownMenu: DefineComponent<DropdownMenuProps, DropdownMenuSlots, DropdownMenuEmits>;
    // DropdownItem: DefineComponent<DropdownItemProps, DropdownItemSlots, DropdownItemEmits>;
    // DropdownHeader: DefineComponent<DropdownHeaderProps, DropdownHeaderSlots, DropdownHeaderEmits>;
    // DropdownDivider: DefineComponent<DropdownDividerProps, DropdownDividerSlots, DropdownDividerEmits>;

    // Table Components
    // Table: DefineComponent<TableProps, TableSlots, TableEmits>;
    // DataTable: DefineComponent<DataTableProps, DataTableSlots, DataTableEmits>;
    // THead: DefineComponent<THeadProps, THeadSlots, THeadEmits>;
    // TBody: DefineComponent<TBodyProps, TBodySlots, TBodyEmits>;
    // TFoot: DefineComponent<TFootProps, TFootSlots, TFootEmits>;
    // Tr: DefineComponent<TrProps, TrSlots, TrEmits>;
    // Th: DefineComponent<ThProps, ThSlots, ThEmits>;
    // Td: DefineComponent<TdProps, TdSlots, TdEmits>;

    // UI Components
    // Badge: DefineComponent<BadgeProps, BadgeSlots, BadgeEmits>;
    // Icon: DefineComponent<IconProps, IconSlots, IconEmits>;
    // Aspect: DefineComponent<AspectProps, AspectSlots, AspectEmits>;
    // Placeholder: DefineComponent<PlaceholderProps, PlaceholderSlots, PlaceholderEmits>;
    // Figure: DefineComponent<FigureProps, FigureSlots, FigureEmits>;
    // Chart: DefineComponent<ChartProps, ChartSlots, ChartEmits>;
    // Vr: DefineComponent<VrProps, VrSlots, VrEmits>;

    // Notification Components
    // Toast: DefineComponent<ToastProps, ToastSlots, ToastEmits>;
    // ToastBody: DefineComponent<ToastBodyProps, ToastBodySlots, ToastBodyEmits>;
    // ToastContainer: DefineComponent<ToastContainerProps, ToastContainerSlots, ToastContainerEmits>;
    // Tooltip: DefineComponent<TooltipProps, TooltipSlots, TooltipEmits>;
    // Popover: DefineComponent<PopoverProps, PopoverSlots, PopoverEmits>;

    // Offcanvas Components
    // Offcanvas: DefineComponent<OffcanvasProps, OffcanvasSlots, OffcanvasEmits>;
    // OffcanvasHeader: DefineComponent<OffcanvasHeaderProps, OffcanvasHeaderSlots, OffcanvasHeaderEmits>;
    // OffcanvasBody: DefineComponent<OffcanvasBodyProps, OffcanvasBodySlots, OffcanvasBodyEmits>;
    // OffcanvasTitle: DefineComponent<OffcanvasTitleProps, OffcanvasTitleSlots, OffcanvasTitleEmits>;

    // Tab Components
    // Tabs: DefineComponent<TabsProps, TabsSlots, TabsEmits>;
    // Tab: DefineComponent<TabProps, TabSlots, TabEmits>;
    // TabContent: DefineComponent<TabContentProps, TabContentSlots, TabContentEmits>;

    // Carousel Components
    // Carousel: DefineComponent<CarouselProps, CarouselSlots, CarouselEmits>;
    // CarouselItem: DefineComponent<CarouselItemProps, CarouselItemSlots, CarouselItemEmits>;
    // CarouselInner: DefineComponent<CarouselInnerProps, CarouselInnerSlots, CarouselInnerEmits>;
    // CarouselControl: DefineComponent<CarouselControlProps, CarouselControlSlots, CarouselControlEmits>;
    // CarouselIndicators: DefineComponent<CarouselIndicatorsProps, CarouselIndicatorsSlots, CarouselIndicatorsEmits>;
    // CarouselIndicatorButton: DefineComponent<CarouselIndicatorButtonProps, CarouselIndicatorButtonSlots, CarouselIndicatorButtonEmits>;
    // CarouselCaption: DefineComponent<CarouselCaptionProps, CarouselCaptionSlots, CarouselCaptionEmits>;

    // ListGroup Components
    // ListGroup: DefineComponent<ListGroupProps, ListGroupSlots, ListGroupEmits>;
    // ListGroupItem: DefineComponent<ListGroupItemProps, ListGroupItemSlots, ListGroupItemEmits>;

    // Breadcrumb Components
    // Breadcrumb: DefineComponent<BreadcrumbProps, BreadcrumbSlots, BreadcrumbEmits>;
    // BreadcrumbItem: DefineComponent<BreadcrumbItemProps, BreadcrumbItemSlots, BreadcrumbItemEmits>;

    // Native Components
    // NativeCollapse: DefineComponent<NativeCollapseProps, NativeCollapseSlots, NativeCollapseEmits>;
    // NativeDialog: DefineComponent<NativeDialogProps, NativeDialogSlots, NativeDialogEmits>;
    // NativeProgress: DefineComponent<NativeProgressProps, NativeProgressSlots, NativeProgressEmits>;
  }
}

// Ensure this file is treated as a module
export {};