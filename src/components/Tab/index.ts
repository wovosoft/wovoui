import {InjectionKey} from "vue";

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