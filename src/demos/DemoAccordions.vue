<template>
  <h2>Accordion Test</h2>
  Showing : {{ index }}
  <Button @click="alwaysOpen=!alwaysOpen">Toggle</Button>
  <Accordion v-model="index" :always-open="alwaysOpen">
    <AccordionItem header="Accordion Header" v-model:index="index">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
      the appropriate classes that we use to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
      default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </AccordionItem>
    <AccordionItem header="Accordion Header" v-model:index="index">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
      the appropriate classes that we use to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
      default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </AccordionItem>
    <AccordionItem header="Accordion Header" v-model:index="index">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
      the appropriate classes that we use to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
      default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </AccordionItem>
    <AccordionItem header="Accordion Header" v-model:index="index">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
      the appropriate classes that we use to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
      default variables. It's also worth noting that just about any HTML can go within the
      <code>.accordion-body</code>, though the transition does limit overflow.
    </AccordionItem>
  </Accordion>
</template>

<script setup>
import AccordionItem from "../components/AccordionItem.vue";
import Accordion from "../components/Accordion.vue";
import {ref} from "vue";
import Button from "../components/Button.vue";

const alwaysOpen = ref(false);
const index = ref(0);
</script>
