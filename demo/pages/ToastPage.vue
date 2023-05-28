<template>
    <Container class="p-3">
        <Button variant="primary" @click="$refs.one.toggle()">Toggle Toast</Button>

        <ToastContainer placement="top-right" class="position-fixed top-0 end-0 p-3" style="z-index: 9999">
            <Toast ref="one">
                <template #header>
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </template>
                Hello, world! This is a toast message.
            </Toast>
        </ToastContainer>
    </Container>
</template>

<script lang="ts" setup>
import {Button, Container, Toast} from "../../src";
import {ref} from "vue";
import ToastContainer from "../../src/components/Notification/ToastContainer.vue";

const one = ref<boolean>(false);
</script>

