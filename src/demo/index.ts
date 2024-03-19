import "bootstrap/dist/css/bootstrap.css"
// import 'prismjs/themes/prism.css'

import {createApp} from "vue";
import App from "./components/App.vue";
import routes from "./routes";
import {createVCodeBlock} from '@wdns/vue-code-block';

const VCodeBlock = createVCodeBlock({
    // options
});

const app = createApp(App);
app.use(routes).use(VCodeBlock);
app.mount("#app");
