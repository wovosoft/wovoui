// let handler: (e: any) => void;
// export default {
//     // @ts-ignore
//     mounted(el: HTMLElement, {value}) {
//         handler = (e) => {
//             if (!el?.contains(e.target)) {
//                 if (typeof value === "function") {
//                     value(e, el);
//                 }
//             }
//         }
//         document.addEventListener("click", handler);
//     },
//     beforeUnmount() {
//         document.removeEventListener("click", handler);
//     }
// }
export default {
    beforeMount(el, binding) {
        // Define a click event handler
        const handleClickOutside = (event) => {
            if (!el.contains(event.target) && el !== event.target) {
                binding.value(); // Call the provided callback function
            }
        };

        // Attach the click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Store the event handler on the element for later removal
        el._clickOutside = handleClickOutside;
    },
    unmounted(el) {
        // Remove the event listener when the directive is unmounted
        document.removeEventListener('click', el._clickOutside);
    },
};