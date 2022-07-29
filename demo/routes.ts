import { createRouter,createWebHashHistory } from "vue-router";

import Index from "./pages/Index.vue";
import Buttons from "./pages/Buttons.vue";
import Badges from "./pages/Badges.ts";
const routes=[
    {
        name:"Index",
        component:Index
    },
    {
        name:"Buttons",
        component:Buttons
    },
    {
        name:"Badges",
        component:Badges
    }
]

export default  createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes
});