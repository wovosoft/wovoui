import {ClassType, HasTag, TagType} from "@/components";
import {ColorVariants, TextVariants} from "@/index";

export {default as Card} from "./Card.vue";
export {default as CardBody} from "./CardBody.vue";
export {default as CardFooter} from "./CardFooter.vue";
export {default as CardGroup} from "./CardGroup.vue";
export {default as CardHeader} from "./CardHeader.vue";
export {default as CardImg} from "./CardImg.vue";
export {default as CardLink} from "./CardLink.vue";
export {default as CardSubTitle} from "./CardSubTitle.vue";
export {default as CardText} from "./CardText.vue"
export {default as CardTitle} from "./CardTitle.vue";

export interface CardTitlePropsInterface extends HasTag {
    content?: string;
}

export interface CardTextPropsInterface extends HasTag {

}

export interface CardSubTitlePropsInterface extends HasTag {
    title?: string,
    textVariant?: TextVariants
}

export interface CardLinkPropsInterface {
    href?: string
}

export interface CardImgPropsInterface {
    src?: string;
    alt?: string;
    overlay?: boolean;
    bottom?: boolean;
    end?: boolean;
    left?: boolean;
    right?: boolean;
    start?: boolean;
    top?: boolean;
}

export interface CardHeaderPropsInterface extends HasTag {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: TextVariants;
}

export interface CardGroupPropsInterface extends HasTag {
    deck?: boolean,
    columns?: boolean,
}

export interface CardFooterPropsInterface extends HasTag {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: TextVariants;
}

export interface CardBodyPropsInterface extends HasTag {
    content?: string;
    variant?: ColorVariants;
    borderVariant?: ColorVariants;
    textVariant?: TextVariants;
    overlay?: boolean;
    subTitle?: string;
    subTitleTag?: keyof HTMLElementTagNameMap;
    subTitleTextVariant?: TextVariants;
    title?: string;
    titleTag?: keyof HTMLElementTagNameMap;
}

export interface CardPropsInterface extends HasTag {
    noHeader?:boolean;
    noBody?: boolean;
    noFooter?: boolean;

    align?: string;
    bgVariant?: ColorVariants;
    bodyBgVariant?: ColorVariants;
    bodyBorderVariant?: ColorVariants;
    bodyClass?: ClassType;
    bodyTag?: TagType;
    bodyTextVariant?: TextVariants;

    footer?: string;
    footerBgVariant?: ColorVariants;
    footerTag?: TagType;
    footerTextVariant?: TextVariants;
    footerClass?: ClassType;
    footerBorderVariant?: ColorVariants;

    header?: string;
    headerBgVariant?: ColorVariants;
    headerBorderVariant?: ColorVariants;
    headerClass?: ClassType;
    headerTag?: TagType;
    headerTextVariant?: TextVariants;

    imgAlt?: string;
    imgBottom?: boolean;
    imgEnd?: boolean;
    imgLeft?: boolean;
    imgRight?: boolean;
    imgStart?: boolean;
    imgTop?: boolean;
    imgSrc?: string;
    imgWidth?: string;
    imgHeight?: string;

    overlay?: boolean;
    subTitle?: string;
    subTitleTag?: TagType;
    subTitleTextVariant?: TextVariants;

    textVariant?: TextVariants;
    borderVariant?: ColorVariants;
    title?: string;
    titleTag?: TagType;
}