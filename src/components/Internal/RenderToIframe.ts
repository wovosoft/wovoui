import {h, ref, createApp, onMounted, onBeforeUpdate} from "vue"
// import css from "bootstrap/dist/css/bootstrap.min.css";
//https://www.w3schools.com/howto/howto_css_responsive_iframes.asp
export default {
    name: "RenderToIFrame",
    props: {
        css: {
            type: String,
            default: ''
        }
    },
    setup(props, {slots}) {
        const iframeRef = ref(null)
        const iframeBody = ref(null)
        const iframeHead = ref(null)
        const iframeStyle = ref(null)
        let iframeApp = null

        onMounted(() => {
            iframeBody.value = iframeRef.value.contentDocument.body
            iframeHead.value = iframeRef.value.contentDocument.head
            const el = document.createElement("div")
            iframeBody.value.appendChild(el)
            iframeStyle.value = document.createElement("style")
            iframeStyle.value.innerHTML = props.css
            iframeHead.value.appendChild(iframeStyle.value)

            //adding esternal css
            let link = document.createElement("link");
            link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
            link.rel = "stylesheet";
            iframeHead.value.appendChild(link);

            iframeApp = createApp({
                name: "iframeRender",
                setup() {
                    return () => slots.default()
                }
            }).mount(el);
        })
        onBeforeUpdate(() => {
            if (!iframeApp || !iframeRef.value) {
                return
            }
            if (props.css) {
                iframeStyle.value.innerHTML = props.css
            }
        })
        return () => h("div", {
            style: {
                position: "relative",
                width: "100%",
                overflow: "hidden",
                paddingTop: "56.25%"
            }
        }, h("iframe", {
            ref: iframeRef,
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                width: "100%",
                height: "100%",
                border: "none"
            }
        }))
    }
}
