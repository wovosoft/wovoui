import * as components from "./index";

export default {
    install: (app, options) => {
        for (let x in components) {
            app.component(x, components[x]);
        }
    }
}