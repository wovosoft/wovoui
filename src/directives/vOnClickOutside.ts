let handler = null;

export default {
    mounted(el, binding) {
        handler = (e) => {
            if (!el?.contains(e.target)) {
                if (typeof binding.value === "function") {
                    binding.value(e, el);
                }
            }
        }
        document.addEventListener("click", handler);
    },
    beforeUnmount(el, binding) {
        document.removeEventListener("click", handler);
    }
}