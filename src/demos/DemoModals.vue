<template>
    <Container>
        <h2>Demo Modals</h2>
        <Button @click="modal1=!modal1">Modal 1</Button>
        <Button @click="modal_fullscreen=!modal_fullscreen">Modal Fullscreen</Button>
        <Modal v-model="modal1"
               :static="true"
               @close="log('close')"
               title="Modal Title">
            Modal Body
        </Modal>
        <Modal v-model="modal_fullscreen"
               fullscreen
               @close="log('close')"
               title="Modal Title">
            Modal Body
            <Button @click="modal1=!modal1">Modal 1</Button>
        </Modal>
    </Container>
</template>

<script>
import Button from "../components/Button.vue";
import Modal from "../components/Modal.vue";
import Container from "../components/Container.vue";

export default {
    name: "DemoModals",
    components: {Container, Modal, Button},
    data() {
        return {
            modal1: false,
            modal_fullscreen: false,
        }
    },
    methods: {
        log() {
            console.log(...arguments)
        }
    }
}
</script>
