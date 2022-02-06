<template>
    <div class="accordion-body">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "AccordionBody"
})
</script>
