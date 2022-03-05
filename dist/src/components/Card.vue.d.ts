import { PropType } from "vue";
import { ColorVariants } from "../types/colorVariants";
declare const _default: import("vue").DefineComponent<{
    align: {
        type: PropType<string>;
        default: any;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyBorderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyClass: {
        type: PropType<string | any[]>;
        default: any;
    };
    bodyTag: {
        type: PropType<string>;
        default: string;
    };
    bodyTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footer: {
        type: PropType<string>;
        default: any;
    };
    footerBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footerTag: {
        type: PropType<string>;
        default: string;
    };
    footerTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footerClass: {
        type: PropType<string | any[]>;
        default: any;
    };
    footerBorderVariant: {
        type: PropType<string>;
        default: any;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    headerBorderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    headerClass: {
        type: PropType<string | object | any[]>;
        default: any;
    };
    headerTag: {
        type: PropType<string>;
        default: string;
    };
    headerTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    imgAlt: {
        type: PropType<string>;
        default: any;
    };
    imgBottom: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgEnd: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgLeft: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgRight: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgStart: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgTop: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgSrc: {
        type: PropType<string>;
        default: any;
    };
    imgWidth: {
        type: PropType<string>;
        default: any;
    };
    imgHeight: {
        type: PropType<string>;
        default: any;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    overlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    subTitle: {
        type: PropType<string>;
        default: any;
    };
    subTitleTag: {
        type: PropType<string>;
        default: string;
    };
    subTitleTextVariant: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<string>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    borderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<string>;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariants;
        "flex-row": boolean;
        "flex-row-reverse": boolean;
    })[]>;
    cardImageBindings: import("vue").ComputedRef<{
        alt: string;
        bottom: boolean;
        end: boolean;
        left: boolean;
        right: boolean;
        start: boolean;
        top: boolean;
        src: string;
        width: string;
        height: string;
        class: {
            "card-img": boolean;
        };
    }>;
    cardBodyBindings: import("vue").ComputedRef<{
        tag: string;
        variant: ColorVariants;
        borderVariant: ColorVariants;
        textVariant: ColorVariants;
        overlay: boolean;
        title: string;
        titleTag: string;
        class: string | any[];
        subTitle: string;
        subTitleTag: string;
        subTitleTextVariant: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<string>;
        default: any;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyBorderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bodyClass: {
        type: PropType<string | any[]>;
        default: any;
    };
    bodyTag: {
        type: PropType<string>;
        default: string;
    };
    bodyTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footer: {
        type: PropType<string>;
        default: any;
    };
    footerBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footerTag: {
        type: PropType<string>;
        default: string;
    };
    footerTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    footerClass: {
        type: PropType<string | any[]>;
        default: any;
    };
    footerBorderVariant: {
        type: PropType<string>;
        default: any;
    };
    header: {
        type: PropType<string>;
        default: any;
    };
    headerBgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    headerBorderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    headerClass: {
        type: PropType<string | object | any[]>;
        default: any;
    };
    headerTag: {
        type: PropType<string>;
        default: string;
    };
    headerTextVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    imgAlt: {
        type: PropType<string>;
        default: any;
    };
    imgBottom: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgEnd: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgLeft: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgRight: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgStart: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgTop: {
        type: PropType<boolean>;
        default: boolean;
    };
    imgSrc: {
        type: PropType<string>;
        default: any;
    };
    imgWidth: {
        type: PropType<string>;
        default: any;
    };
    imgHeight: {
        type: PropType<string>;
        default: any;
    };
    noBody: {
        type: PropType<boolean>;
        default: boolean;
    };
    overlay: {
        type: PropType<boolean>;
        default: boolean;
    };
    subTitle: {
        type: PropType<string>;
        default: any;
    };
    subTitleTag: {
        type: PropType<string>;
        default: string;
    };
    subTitleTextVariant: {
        type: PropType<string>;
        default: string;
    };
    tag: {
        type: PropType<string>;
        default: string;
    };
    textVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    borderVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    title: {
        type: PropType<string>;
        default: any;
    };
    titleTag: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    footer: string;
    header: string;
    title: string;
    tag: string;
    overlay: boolean;
    borderVariant: ColorVariants;
    textVariant: ColorVariants;
    subTitle: string;
    subTitleTag: string;
    subTitleTextVariant: string;
    titleTag: string;
    align: string;
    bgVariant: ColorVariants;
    bodyBgVariant: ColorVariants;
    bodyBorderVariant: ColorVariants;
    bodyClass: string | any[];
    bodyTag: string;
    bodyTextVariant: ColorVariants;
    footerBgVariant: ColorVariants;
    footerTag: string;
    footerTextVariant: ColorVariants;
    footerClass: string | any[];
    footerBorderVariant: string;
    headerBgVariant: ColorVariants;
    headerBorderVariant: ColorVariants;
    headerClass: string | object | any[];
    headerTag: string;
    headerTextVariant: ColorVariants;
    imgAlt: string;
    imgBottom: boolean;
    imgEnd: boolean;
    imgLeft: boolean;
    imgRight: boolean;
    imgStart: boolean;
    imgTop: boolean;
    imgSrc: string;
    imgWidth: string;
    imgHeight: string;
    noBody: boolean;
}>;
export default _default;
//# sourceMappingURL=Card.vue.d.ts.map