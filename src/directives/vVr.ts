export default {
    mounted(el, binding: boolean) {
        if (binding) {
            el.classList.add("vr");
        } else {
            el.classList.remove("vr");
        }
    }
}