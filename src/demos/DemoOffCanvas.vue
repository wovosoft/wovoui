<template>
    <h2>Off Canvas or Side Drawers</h2>
    <Button @click="triggerEvent">Toggle Off Canvas</Button>
    <Button @click="toggle=!toggle">Toggle Off Canvas</Button>
    <Button @click="$refs.offcanvas.show()">Toggle Off Canvas</Button>
    <OffCanvas ref="offcanvas" id="offcanvas" header="Off Canvas" v-model="toggle">
        <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
            images,
            lists, etc.
        </div>
        <Dropdown class="mt-3" text="Dropdown button">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
        </Dropdown>
    </OffCanvas>
</template>

<script>
import OffCanvas from "../components/OffCanvas.vue";
import Button from "../components/Button.vue";
import Dropdown from "../components/Dropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";

export default {
    name: "DemoOffCanvas",
    components: {DropdownItem, Dropdown, Button, OffCanvas},
    methods: {
        triggerEvent() {
            window.dispatchEvent(new CustomEvent("toggleOffCanvas", {detail: "offcanvas"}))
        }
    },
    data() {
        return {
            toggle: false
        }
    }
}
</script>
