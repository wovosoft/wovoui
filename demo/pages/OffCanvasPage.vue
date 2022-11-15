<template>
    <Button @click="open=!open">Toggle</Button>
    <Button @click="$refs.tt.toggle()">By Ref Toggle</Button>
    {{open}}
    <OffCanvas v-model="open" header="Offcanvas" ref="tt">
        Offcanvas Page
        <Card>
            Custom Card Component
        </Card>
    </OffCanvas>
</template>

<script lang="ts" setup>
import OffCanvas from "../../src/components/Offcanvas/Offcanvas.vue";
import {ref} from "vue";
import {Button} from "../../src";
import Card from "../../src/components/Card/Card.vue";

const open = ref(false)
</script>
