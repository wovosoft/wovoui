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
import OffCanvas from "@/components/Offcanvas/Offcanvas.vue";
import {ref} from "vue";
import {Button} from "@/";
import Card from "@/components/Card/Card.vue";

const open = ref(false)
</script>
