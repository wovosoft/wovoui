import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(router)

import "highlight.js/styles/github.css"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from "highlight.js/lib/languages/json";
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from "@highlightjs/vue-plugin/src/vue";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
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