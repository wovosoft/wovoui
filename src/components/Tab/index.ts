export {default as Tabs} from "./Tabs.vue";
export {default as Tab} from "./Tab.vue";
export {default as TabContent} from "./TabContent.vue";

export type registerTabType = (item: TabMapItem) => TabMapItem[]
export type unregisterTabType = (item: number | undefined) => TabMapItem[]

export type TabMapItem = {
    uid?: number | string;
    updateVisibility?: (state: boolean) => void,
    title?: string;
    // visible?: boolean;
    states?: {
        active: boolean;
        show: boolean;
        ariaSelected: boolean | null;
        tabindex: number | null;
    }
}