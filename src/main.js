import {createApp} from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const routes = [
    {
        name: 'Index',
        path: '/',
        component: () => import("./pages/Index.vue")
    },
    {
        name: 'Buttons',
        path: '/buttons',
        component: () => import("./pages/Buttons/Buttons.vue")
    },
    {
        name: 'Table',
        path: '/table',
        component: () => import("./pages/Table/Table.vue")
    },
    {
        name: 'Datatable',
        path: '/datatable',
        component: () => import("./pages/Table/DataTable.vue")
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


const app = createApp(App)
app.use(router)

import "highlight.js/styles/github.css"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
app.use(hljsVuePlugin)

//
// import { PrismEditor } from 'vue-prism-editor';
// import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles
//
// app.component('PrismEditor', PrismEditor);


// app.config.warnHandler = function (msg, vm, trace) {
//     // `trace` is the component hierarchy trace
//     console.log(msg)
// }
app.mount('#app')