import DefaultTheme from 'vitepress/theme'
import './style.scss'
import RenderToIframe from "../../../src/components/Internal/RenderToIframe";
// import {registerSampleElement} from "../helpers";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.component("Sample", RenderToIframe)
    },
    // setup(props) {
    //     registerSampleElement();
    //     return {}
    // }
}
