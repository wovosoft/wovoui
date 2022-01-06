<template>
    <button class="navbar-toggler" @click="toggleNavbar" type="button" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>

<script>
import {makeString} from "./shared/properties.js";

export default {
    name: "NavbarToggler",
    props: {
        target: makeString()
    },
    methods: {
        toggleNavbar() {
            if (this.target) {
                let event = new CustomEvent("toggleCollapse", {
                    detail: this.target,
                    bubbles:false
                });
                document.dispatchEvent(event);
            }
        }
    },
}
</script>