import {Component} from "vue";
import {Icons} from "@wovosoft/wovoui-icons";
import {HasTag} from "@/components";
import {ColorVariants} from "@/index";

export {default as Alert} from "./Alert.vue";
export {default as AlertHeading} from "./AlertHeading.vue";
export {default as AlertLink} from "./AlertLink.vue";

export interface AlertLinkPropsInterface {
    href?: string;
    content?: string;
}

export interface AlertHeadingPropsInterface {
    tag?: keyof HTMLElementTagNameMap;
}

export interface AlertPropsInterface extends HasTag {
    variant?: ColorVariants;
    dismissible?: boolean;
    timeout?: number;
    timeoutStep?: number;
    show?: boolean;
    closeBtnWhite?: boolean;
    icon?: Icons | Component;
    heading?: string;
}