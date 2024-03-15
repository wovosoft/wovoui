import {
    AlignContent,
    ColAlignments,
    ColOrders,
    ColSizes, ItemAlignment, JustifyAlignment,
    JustifyContentAlignments, Order,
    ResponsiveNumbers, type ResponsiveSizes
} from "@/index";

export {default as Layout} from "./Layout.vue";
export {default as Column} from "./Column.vue";
export {default as Stack} from "./Stack";
export {default as Row} from "./Row.vue";
export {default as Flex} from "./Flex.vue";
export {default as FlexItem} from "./FlexItem.vue";
export {default as Col} from "./Col.vue";
export {default as Container} from "./Container.vue";
export {default as Grid} from "./Grid";
export {default as GridCol} from "./GridCol";

export interface ContainerProps {
    tag?: keyof HTMLElementTagNameMap;
    fluid?: boolean;
    size?: ResponsiveSizes;
}

interface ResponsiveSizesProp {
    sm?: string | ColSizes;
    md?: string | ColSizes;
    lg?: string | ColSizes;
    xl?: string | ColSizes;
}

interface ResponsiveGuttersProp {
    g?: string | ColSizes;
    gSm?: string | ColSizes;
    gMd?: string | ColSizes;
    gLg?: string | ColSizes;
    gXl?: string | ColSizes;
}

interface BaseLayoutProps extends ResponsiveSizesProp {
    tag?: keyof HTMLElementTagNameMap;
    justifyContent?: JustifyContentAlignments;
    //gutters
    gx?: 0 | ResponsiveNumbers;
    gy?: 0 | ResponsiveNumbers;
}

export interface ColProps extends BaseLayoutProps {
    col?: string | ColSizes;
    alignSelf?: ColAlignments;
    order?: ColOrders;
    offsetSm?: 0 | ResponsiveNumbers;
    offsetMd?: 0 | ResponsiveNumbers;
    offsetLg?: 0 | ResponsiveNumbers;
    offsetXl?: 0 | ResponsiveNumbers;
}

export interface RowProps extends BaseLayoutProps, ResponsiveGuttersProp {
    cols?: string | ColSizes;
    alignItems?: ColAlignments;
}

export interface FlexProps {
    /**
     * HTML Tag
     */
    tag?: keyof HTMLElementTagNameMap;

    /**
     * When it is set to false the default d-flex class won't be added.
     * By default, it is true
     */
    pure?: boolean;

    /**
     * Responsive Flex classes sm|md|lg|xl|xxl
     */
    flex?: boolean | ResponsiveSizes | ResponsiveSizes[];

    /**
     * Responsive Inline Flex classes sm|md|lg|xl|xxl
     */
    inline?: boolean | ResponsiveSizes | ResponsiveSizes[];

    /**
     * Horizontal (Row) directions
     * ltr = Left to Right
     * rtl = Right to Bottom
     */
    hDir?: 'ltr' | 'rtl';

    /**
     * (Column) directions
     * ttb = Top to Bottom
     * btt = Bottom to Top
     */
    vDir?: 'ttb' | 'btt';

    /**
     * Justify Content Alignment
     */
    jc?: JustifyAlignment;

    /**
     * Responsive variations of Justified Content
     * @link https://getbootstrap.com/docs/5.2/utilities/flex/
     */
    jcOn?: ResponsiveSizes | ResponsiveSizes[];
    /**
     * Align Items
     */
    ai?: ItemAlignment;
    aiOn?: ResponsiveSizes | ResponsiveSizes[];

    /**
     * Align Self
     */
    as?: ItemAlignment;
    asOn?: ResponsiveSizes | ResponsiveSizes[];
    wrap?: boolean | 'reverse';
    wrapOn?: ResponsiveSizes | ResponsiveSizes[];
    nowrap?: boolean | 'reverse';
    nowrapOn?: ResponsiveSizes | ResponsiveSizes[];
    /**
     * Align Content
     */
    ac?: AlignContent;
    acOn?: ResponsiveSizes | ResponsiveSizes[];
}

type ResponsiveFlex = boolean | ResponsiveSizes | ResponsiveSizes[];

export interface FlexItemProps {
    tag?: keyof HTMLElementTagNameMap;
    fill?: ResponsiveFlex;
    grow?: boolean;
    growOn?: ResponsiveSizes | ResponsiveSizes[];
    shrink?: boolean;
    shrinkOn?: ResponsiveSizes | ResponsiveSizes[];
    order?: Order;
    orderSm?: Order;
    orderMd?: Order;
    orderLg?: Order;
    orderXl?: Order;
    orderXxl?: Order;
}

export const ResponsiveOrders = ['order', 'orderSm', 'orderMd', 'orderLg', 'orderXl', 'orderXxl'] as const;

