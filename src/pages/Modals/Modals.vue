<template>
    <h1>Modals</h1>
    <p>
        Modals are streamlined, but flexible dialog prompts powered by JavaScript and CSS. They support a number of use
        cases from user notification to completely custom content and feature a handful of helpful sub-components,
        sizes, variants, accessibility, and more.
    </p>
    <Button @click="$refs.modal1.show()">Launch demo modal</Button>
    <Modal ref="modal1">
        <p class="my-4">Hello from modal!</p>
    </Modal>
    <Highlight code='<Button @click="$refs.modal1.show()">Launch demo modal</Button>
<Modal ref="modal1">
    <p class="my-4">Hello from modal!</p>
</Modal>'/>

    <h2>Modal sizing</h2>
    <p>
        Modals have three optional sizes, available via the prop size. These sizes kick in at certain breakpoints to
        avoid horizontal scrollbars on narrower viewports. Valid optional sizes are sm, lg, and xl.
    </p>
    <div>
        <Button @click="$refs['modal-xl'].show()" variant="primary">xl modal</Button>
        <Button @click="$refs['modal-lg'].show()" variant="primary" class="mx-2">lg modal</Button>
        <Button @click="$refs['modal-sm'].show()" variant="primary">sm modal</Button>

        <Modal ref="modal-xl" size="xl" title="Extra Large Modal">Hello Extra Large Modal!</Modal>
        <Modal ref="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</Modal>
        <Modal ref="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</Modal>
    </div>
    <Highlight code='<div>
    <Button @click="$refs[&apos;modal-xl&apos;].show()" variant="primary">xl modal</Button>
    <Button @click="$refs[&apos;modal-lg&apos;].show()" variant="primary" class="mx-2">lg modal</Button>
    <Button @click="$refs[&apos;modal-sm&apos;].show()" variant="primary">sm modal</Button>

    <Modal ref="modal-xl" size="xl" title="Extra Large Modal">Hello Extra Large Modal!</Modal>
    <Modal ref="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</Modal>
    <Modal ref="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</Modal>
</div>'/>

    <h2>Scrolling long content</h2>
    <p>
        When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try
        the demo below to see what we mean.
    </p>
    <div>
        <Button @click="$refs['modal-scrollable'].show()">Launch scrolling modal</Button>

        <Modal ref="modal-scrollable" scrollable title="Scrollable Content">
            <p class="my-4" v-for="i in 20" :key="i">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
        </Modal>
    </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
import Button from "../../components/Button.vue";
import Highlight from "../../components/Highlight.ts";

export default {
    name: "Modals",
    components: {Highlight, Button, Modal}
}
</script>