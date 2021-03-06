import "bootstrap/dist/css/bootstrap.css"

import {createApp} from "vue";
import App from "./components/App.vue";
import routes from "./routes";
const app = createApp(App)
app.use(routes)
app.mount("#app");
