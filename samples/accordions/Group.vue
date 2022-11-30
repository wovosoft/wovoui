<template>
    <ButtonGroup class="mb-3">
        <Button @click="$refs.acc.openAll()">Open All</Button>
        <Button @click="$refs.acc.collapseAll()">Collapse All</Button>
        <Button @click="$refs.acc.toggleAll()">Toggle All</Button>
    </ButtonGroup>

    <Accordion ref="acc" always-open>
        <AccordionItem v-for="i in 5" :header="'Accordion Item # '+i">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
            adds the appropriate classes that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
            CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
            `.accordion-body`, though the transition does limit overflow.
        </AccordionItem>
    </Accordion>
</template>
<script setup>
import {ButtonGroup, Button, Accordion, AccordionItem} from "../..";
</script>