<template>
  <h2>Default Alert</h2>
  <Alert v-model="visible">
    This is Alert
    <AlertLink>Alert Link</AlertLink>
  </Alert>
  <Alert :timeout="3000" v-model="timeout">Timeout Alert</Alert>
  <Button @click="visible=!visible">Toggle</Button>
</template>

<script setup>
import Alert from "../components/Alert.vue";
import {ref} from "vue";
import Button from "../components/Button.vue";
import AlertLink from "../components/AlertLink.vue";

const visible = ref(true)
const timeout = ref(true)
</script>
