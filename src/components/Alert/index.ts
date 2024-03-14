export {default as Alert} from "./Alert";
export {default as AlertHeading} from "./AlertHeading.vue";
export {default as AlertLink} from "./AlertLink.vue";

export interface AlertLinkPropsInterface {
    href?: string;
    content?: string;
}

export interface AlertHeadingPropsInterface{
    tag?:keyof HTMLElementTagNameMap;
}