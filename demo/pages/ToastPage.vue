<template>
    <Container class="p-3">
        <Button variant="primary" @click="$refs.one.toggle()">Toggle Toast</Button>

        <div class="position-fixed top-0 end-0 p-3" style="z-index: 9999">
            <Toast ref="one">
                <template #header>
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </template>
                Hello, world! This is a toast message.
            </Toast>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import {Button, Container, Toast} from "../../src";
import {ref} from "vue";

const one = ref<boolean>(false);
</script>

