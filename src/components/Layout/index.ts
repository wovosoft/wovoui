import {
    ColAlignments,
    ColOrders,
    ColSizes,
    JustifyContentAlignments,
    ResponsiveNumbers, type ResponsiveSizes
} from "@/index";

export {default as Layout} from "./Layout.vue";
export {default as Column} from "./Column.vue";
export {default as Stack} from "./Stack";
export {default as Row} from "./Row";
export {default as Flex} from "./Flex";
export {default as FlexItem} from "./FlexItem";
export {default as Col} from "./Col.vue";
export {default as Container} from "./Container.vue";
export {default as Grid} from "./Grid";
export {default as GridCol} from "./GridCol";


export interface ContainerProps {
    tag?: keyof HTMLElementTagNameMap;
    fluid?: boolean;
    size?: ResponsiveSizes;
}

export interface ColProps {
    tag?: keyof HTMLElementTagNameMap;
    col?: string | ColSizes;
    sm?: string | ColSizes;
    md?: string | ColSizes;
    lg?: string | ColSizes;
    xl?: string | ColSizes;
    alignSelf?: ColAlignments;
    justifyContent?: JustifyContentAlignments;
    order?: ColOrders;
    offsetSm?: 0 | ResponsiveNumbers;
    offsetMd?: 0 | ResponsiveNumbers;
    offsetLg?: 0 | ResponsiveNumbers;
    offsetXl?: 0 | ResponsiveNumbers;
    //gutters
    gx?: 0 | ResponsiveNumbers;
    gy?: 0 | ResponsiveNumbers;
}