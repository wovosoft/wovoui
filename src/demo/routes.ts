import {createRouter, createWebHashHistory} from "vue-router";

import Index from "./pages/Index.vue";
import Buttons from "./pages/Buttons.vue";
import Badges from "./pages/Badges.vue";
import Alerts from "./pages/Alerts.vue";
import Dropdowns from "./pages/Dropdowns.vue";
import Collapses from "./pages/Collapses.vue";
import PanelMenus from "./pages/PanelMenus.vue";
import FlexPage from "./pages/FlexPage.vue";
import TooltipPage from "./pages/TooltipPage.vue";
import TablePage from "./pages/TablePage.vue";
import FormCheckboxes from "./pages/Checkboxes.vue";
import ModalPage from "./pages/ModalPage.vue";
import DatatablePage from "./pages/DatatablePage.vue";
import AccordionPage from "./pages/AccordionPage.vue";
import CardPage from "./pages/CardPage.vue";
//@ts-ignore
import PaginationPage from "./pages/PaginationPage.vue"
import OffCanvasPage from "./pages/OffCanvasPage.vue"
import FormControlPage from "./pages/FormControlPage.vue"
import CarouselPage from "./pages/CarouselPage.vue"
import TypeHeadPage from "./pages/TypeHeadPage.vue"
import Breadcrumbs from "@/demo/pages/Breadcrumbs.vue";
import ButtonGroups from "@/demo/pages/ButtonGroups.vue";

export const routes = [
    {
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/accordions",
        name: "Accordions",
        component: AccordionPage
    },
    {
        path: "/alerts",
        name: "Alerts",
        component: Alerts
    },
    {
        path: "/badges",
        name: "Badges",
        component: Badges
    },
    {
        path: "/breadcrumbs",
        name: "Breadcrumbs",
        component: Breadcrumbs
    },
    {
        path: "/buttons",
        name: "Buttons",
        component: Buttons
    },

    {
        path: "/button-groups",
        name: "Button Groups",
        component: ButtonGroups
    },
    {
        path: "/cards",
        name: "Cards",
        component: CardPage
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
    },
    {
        path: "/tooltip",
        name: "Tooltip",
        component: TooltipPage
    },
    {
        path: "/table",
        name: "Table",
        component: TablePage
    },
    {
        path: "/Pagination",
        name: "Pagination",
        component: PaginationPage
    },
    {
        path: "/offcanvas",
        name: "Offcanvas",
        component: OffCanvasPage
    },
    {
        path: "/form-controls",
        name: "Form Control",
        component: FormControlPage
    },
    {
        path: "/form-checkboxes",
        name: "Form Checkboxes",
        component: FormCheckboxes
    },
    {
        path: "/carousel",
        name: "Carousel",
        component: CarouselPage
    },
    {
        path: "/typehead",
        name: "Typehead",
        component: TypeHeadPage
    },
    {
        path: "/modal-page",
        name: "ModalPage",
        component: ModalPage
    },
    {
        path: "/datatable-page",
        name: "DatatablePage",
        component: DatatablePage
    },
    {
        path: "/Native",
        name: "Native",
        component: () => import("./pages/Native.vue")
    },
    {
        path: "/random",
        name: "Random",
        component: () => import("./pages/RandomPage.vue")
    },
    {
        path: "/tabs-page",
        name: "Tabs",
        component: () => import("./pages/TabsPage.vue")
    },
    {
        path: "/toast-page",
        name: "Toasts",
        component: () => import("./pages/ToastPage.vue")
    },
    {
        path: "/progress-page",
        name: "Progress Bar",
        component: () => import("./pages/ProgressbarPage.vue")
    },
    {
        path: "/datepicker-page",
        name: "Datepicker",
        component: () => import("./pages/DatePickerPage.vue")
    },
    {
        path: "/calendar-page",
        name: "Calendar",
        component: () => import("./pages/CalendarPage.vue")
    },
]


export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    // @ts-ignore
    routes
});