let handler: (e: any) => void;
export default {
    // @ts-ignore
    mounted(el: HTMLElement, {value}) {
        handler = (e) => {
            if (!el?.contains(e.target)) {
                if (typeof value === "function") {
                    value(e, el);
                }
            }
        }
        document.addEventListener("click", handler);
    },
    beforeUnmount() {
        document.removeEventListener("click", handler);
    }
}