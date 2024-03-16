import {InjectionKey, Ref} from "vue";
import {HasTag} from "@/components";

export {default as Accordion} from './Accordion.vue'
export {default as AccordionBody} from "./AccordionBody.vue";
export {default as AccordionHeader} from "./AccordionHeader.vue";
export {default as AccordionItem} from "./AccordionItem.vue";
export {default as Collapse} from "./Collapse.vue";

export type AccordionItemStateType = Ref<boolean | undefined>;
export const RegisterAccordionItemInjectionKey = Symbol() as InjectionKey<(item: AccordionItemStateType) => number>;
export const SetActiveAccordionItemInjectionKey = Symbol() as InjectionKey<(index: AccordionItemStateType) => void>;

export interface AccordionProps extends HasTag {
    modelValue?: number;
    flush?: boolean;
    alwaysOpen?: boolean;
}

export interface MenuItemType {
    title?: string,
    text?: string,
    link?: string | object,
    children?: MenuItemType[]
}

export interface MenuProps extends AccordionProps {
    items?: MenuItemType[];
    child?: boolean;
    ps?: number;
}

export interface AccordionHeaderProps extends HasTag {
    toggleTag?: keyof HTMLElementTagNameMap;
    modelValue?: boolean;
}

export interface CollapseProps extends HasTag {
    isAccordion?: boolean;
    modelValue?: boolean;
    visible?: boolean;
    isNav?: boolean;
    horizontal?: boolean;
    //must be set when horizontal is true
    //@check the note at https://getbootstrap.com/docs/5.2/components/collapse/#horizontal
    width?: number | string;
}