<template>
    <Container class="pt-3">
        <Button @click="$refs.modal1.show()">Modal 1</Button>
        <Modal
            id="#dmodal"
            title="Modal Header"
            ref="modal1"
            @close="testEvent('close')"
            @ok="testEvent('ok')"
            @hiding="testEvent('1 hiding')"
            @hidden="testEvent('2 hidden')"
            @shown="testEvent('2 shown')"
            static
            @showing="testEvent('1 showing')">
            Modal
        </Modal>
        <Button class="mx-3" @click="modal_nested=!modal_nested">
            Nested Modal {{ modal_nested }}
        </Button>
        <Button v-modal="'#baal'">Modal Directive</Button>
        <Button v-modal="'#baal2'">Modal Directive 2</Button>
        <Modal
            id="#baal"
            shrink
            header-variant="dark"
            close-btn-white
            lazy
            title="Modal Header"
            @close="testEvent('close')"
            @ok="testEvent('ok')"
            @hiding="testEvent('1 hiding')"
            @hidden="testEvent('2 hidden')"
            @shown="testEvent('2 shown')"
            @showing="testEvent('1 showing')"
            v-model="modal_nested">
            Nested Modal
        </Modal>
        <Modal
            id="#baal2"
            shrink
            header-variant="dark"
            close-btn-white
            lazy
            title="Modal Header">
            Nested Modal
        </Modal>
    </Container>
</template>

<script lang="ts" setup>
import Modal from "../../src/components/Modal.vue";
import {ref} from "vue";
import {Button, Container} from "../../src";
import vVr from "../../src/directives/vVr";
import vModal from "../../src/directives/vModal"

const modal_nested = ref(false)

function testEvent(name) {
    console.log(name);
}


</script>
