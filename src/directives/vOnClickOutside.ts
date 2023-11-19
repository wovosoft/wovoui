export default {
    beforeMount(el: HTMLElement & { _clickOutside: any }, binding: { value: any }) {
        // Define a click event handler
        const handleClickOutside = (event: any) => {
            if (!el.contains(event.target) && el !== event.target) {
                binding.value?.(event); // Call the provided callback function
            }
        };

        // Attach the click event listener to the document
        document.addEventListener('click', handleClickOutside);

        // Store the event handler on the element for later removal
        el._clickOutside = handleClickOutside;
    },
    unmounted(el: HTMLElement & { _clickOutside: any }) {
        // Remove the event listener when the directive is unmounted
        document.removeEventListener('click', el._clickOutside);
    },
};