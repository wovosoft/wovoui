<template>
    <Button @click="open=!open">Toggle</Button>
    <OffCanvas v-model="open" header="Offcanvas">
        Offcanvas Page
        <Card>
            Custom Card Component
        </Card>
    </OffCanvas>
</template>

<script lang="ts" setup>
import OffCanvas from "../../src/components/OffCanvas.vue";
import {ref} from "vue";
import {Button} from "../../src";
import Card from "../../src/components/Card.vue";

const open = ref(false)
</script>
