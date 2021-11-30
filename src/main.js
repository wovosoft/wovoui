import {createApp} from 'vue'
// import VueRouter from "vue-router";
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";

// const routes = [
//     {path: '/', component: {}},
//     {path: '/about', component: {}},
// ]
// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
// app.use(router)

app.config.warnHandler = function (msg, vm, trace) {
    // `trace` is the component hierarchy trace
    console.log(msg)
}
app.mount('#app')