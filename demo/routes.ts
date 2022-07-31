import {createRouter, createWebHashHistory} from "vue-router";

import Index from "./pages/Index.vue";
import Buttons from "./pages/Buttons.vue";
import Badges from "./pages/Badges.vue";
import Alerts from "./pages/Alerts.vue";
import Dropdowns from "./pages/Dropdowns.vue";

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
    }
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // @ts-ignore
    routes
});