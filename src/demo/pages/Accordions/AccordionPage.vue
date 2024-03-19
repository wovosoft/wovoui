<template>
    <Container class="mt-3">
        <h2>Accordion</h2>
        <p>
            Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
        </p>
        <h4>Example</h4>
        <Example1/>

        <VueSource class="my-3" :path="Example1Url" label="Example 1"/>

        <h4 class="mt-5">Flush</h4>
        <Example2/>

        <VueSource class="my-3" :path="Example2Url" label="Example 2"/>

        <h4 class="mt-5">Always open</h4>
        <AlwaysOpen/>

        <VueSource class="my-3" :path="AlwaysOpenUrl" label="AlwaysOpen"/>
    </Container>
</template>

<script lang="ts" setup>
import {Accordion, AccordionItem, Container} from "@";
import VueSource from "@/components/Util/VueSource.vue";
import Example1Url from "./Examples/Example-1.vue?url";
import Example1 from "./Examples/Example-1.vue";

import Example2Url from "./Examples/Example-2.vue?url";
import Example2 from "./Examples/Example-2.vue";

import AlwaysOpenUrl from "../../../../samples/accordions/AlwaysOpen.vue?url";
import AlwaysOpen from "../../../../samples/accordions/AlwaysOpen.vue";

</script>
