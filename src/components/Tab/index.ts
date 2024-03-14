import {InjectionKey} from "vue";
import {ClassType} from "@/components";

export {default as Tabs} from "./Tabs.vue";
export {default as Tab} from "./Tab.vue";
export {default as TabContent} from "./TabContent.vue";

export const registerTabInjection = Symbol('Register Tab Item to Tabs') as InjectionKey<(item: TabMapItem) => any>;
export const unregisterTabInjection = Symbol("Unregister Tab Item from Tabs") as InjectionKey<(item: number | undefined) => any>;

export type TabMapItem = {
    uid?: number | string;
    updateVisibility?: (state: boolean) => void,
    title?: string;
    visible?: boolean;
    states?: {
        active: boolean;
        show: boolean;
        ariaSelected: boolean | null;
        tabindex: number | null;
    }
}

export interface TabProps {
    active?: boolean;
    title?: string;
}

export interface TabsProps {
    /**
     * Index of Active Tab
     * @supported 0 to length of tabs
     */
    modelValue?: number;

    /**
     * @description defines if the tabs should be styled as card
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/card/#navigation
     */
    card?: boolean;

    /**
     * @description defines if the tabs should be styled as pilled
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#pills
     */
    pills?: boolean;

    /**
     * @description defines if the tabs should fill the whole available width
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    fill?: boolean;

    /**
     * @description defines if the tabs should be justified
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/navs-tabs/#fill-and-justify
     */
    justified?: boolean;

    /**
     * @description Defines tabs links alignment
     * @default null
     */
    align?: "center" | "end";

    /**
     * @description Defines if Tab Menus should be at before or after the content area
     * This feature is not supported by bootstrap yet.
     * So, rendering Menus at the end of the content, won't style it properly.
     * In case when value is true, proper styling actions should be taken.
     * @default false
     */
    end?: boolean;

    /**
     * @description Defines if menu should be vertical or not.
     * When card is enabled, styling doesn't work properly.
     * @default false
     */
    vertical?: boolean;

    /**
     * @type any
     * @default null
     * @description Tab Header Classes
     */
    headerClass?: ClassType;

    /**
     * @type any
     * @default null
     * @description Tab Content Classes
     */
    contentClass?: ClassType;
}