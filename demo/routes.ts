import {createRouter, createWebHashHistory} from "vue-router";

import Index from "./pages/Index.vue";
import Buttons from "./pages/Buttons.vue";
import Badges from "./pages/Badges.vue";
import Alerts from "./pages/Alerts.vue";
import Dropdowns from "./pages/Dropdowns.vue";
import Collapses from "./pages/Collapses.vue";
import PanelMenus from "./pages/PanelMenus.vue";
import FlexPage from "./pages/FlexPage.vue";

export const routes = [
    {
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/buttons",
        name: "Buttons",
        component: Buttons
    },
    {
        path: "/badges",
        name: "Badges",
        component: Badges
    },
    {
        path: "/alerts",
        name: "Alerts",
        component: Alerts
    },
    {
        path: "/dropdowns",
        name: "Dropdowns",
        component: Dropdowns
    },
    {
        path: "/collapses",
        name: "Collapse",
        component: Collapses
    },
    {
        path: "/panel-menus",
        name: "Panel Menus",
        component: PanelMenus
    },
    {
        path: "/display-flex",
        name: "Display Flex",
        component: FlexPage
    }
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // @ts-ignore
    routes
});