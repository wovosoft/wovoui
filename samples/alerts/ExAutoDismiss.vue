<template>
    <Button @click="model=true;timeout=0;">Show All {{ model }}</Button>
    <div v-if="model">Timeout : {{ timeout }}</div>
    <Alert v-for="v in ['primary','secondary','success','danger','info','light','dark']"
           :variant="v"
           :timeout="15"
           v-model="model">
        {{ v }}
    </Alert>
</template>

<script lang="ts" setup>
import {Alert, Button} from "../../src";
import {onBeforeUnmount, ref} from "vue";


const model = ref<boolean>(true);
const timeout = ref<number>(0);
let t = setInterval(() => {
    timeout.value++;
    if (timeout.value > 15) {
        timeout.value = 0;
    }
}, 1000);

onBeforeUnmount(() => clearInterval(t));
</script>
