// import {defineCustomElement} from "vue";
// import DisplaySample from "./../../../src/components/Internal/DisplaySample.ce.vue";
class SampleOutput extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML =
            `<style>
                :host{
                    all: initial !important;
                }
                
            </style><slot/>`;
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
// import "bootstrap/dist/css/bootstrap.min.css"
export function registerSampleElement() {
    // const SampleOutput = defineCustomElement(DisplaySample);
    customElements.define("sample-output", SampleOutput, {});
}