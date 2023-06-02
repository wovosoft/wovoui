<template>
  <Container class="pb-3">
    <h4>Basic Alerts</h4>
    <Alert v-for="color in colors" :variant="color" show>
      {{ color }} Alert
    </Alert>

    <h4>Dismissing Alerts</h4>
    <Alert v-for="color in colors" :variant="color" show dismissible>
      {{ color }} Alert
    </Alert>

    <h4>Model Controlled</h4>
    <Button v-for="color in colors" :variant="color" class="me-2" @click="shows[color]=!shows[color]">
      {{ color }} <strong>{{ shows[color] }}</strong>
    </Button>
    <br/>
    <br/>
    <Alert v-for="color in colors" :variant="color" v-model="shows[color]" dismissible>
      {{ color }} Alert
    </Alert>
  </Container>
</template>

<script lang="ts" setup>
import {colors} from "@/demo/assets";

import {Container, Alert, Button} from "@/";
import {reactive} from "vue";

const shows = reactive({});
colors.forEach(item => shows[item] = false);
</script>
