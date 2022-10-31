<template>
    <Button @click="modal1=!modal1">Modal 1</Button>
    <Modal v-model="modal1"  static>
        Modal
    </Modal>
</template>

<script lang="ts" setup>
import Modal from "../../src/components/Modal.vue";
import {ref} from "vue";
import {Button} from "../../src";

const modal1 = ref(false)

</script>
