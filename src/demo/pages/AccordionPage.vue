<template>
  <Container class="mt-3">
    <h4>Example</h4>
    <Accordion>
      <AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds
        the appropriate classes that we use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML can go within the
        `.accordion-body`, though the transition does limit overflow.
      </AccordionItem>
    </Accordion>
    <h4 class="mt-5">Flush</h4>
    <Accordion flush>
      <AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds
        the appropriate classes that we use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML can go within the
        `.accordion-body`, though the transition does limit overflow.
      </AccordionItem>
    </Accordion>

    <h4 class="mt-5">Always open</h4>
    <Accordion always-open>
      <AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds
        the appropriate classes that we use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just about any HTML can go within the
        `.accordion-body`, though the transition does limit overflow.
      </AccordionItem>
    </Accordion>
  </Container>
</template>

<script lang="ts" setup>
import {Accordion, AccordionItem, Container} from "@/";
</script>
