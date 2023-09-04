export default {
    mounted(el: HTMLElement, binding: boolean) {
        if (binding) {
            el.classList.add("vr");
        } else {
            el.classList.remove("vr");
        }
    }
}