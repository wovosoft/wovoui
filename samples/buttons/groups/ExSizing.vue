<template>
    <div class="mb-2" v-for="size in ['lg',null,'sm']">
        <ButtonGroup :size="size" aria-label="Button Group">
            <Button outline>Left</Button>
            <Button outline>Middle</Button>
            <Button outline>Right</Button>
        </ButtonGroup>
    </div>
</template>

<script lang="ts" setup>
import {ButtonGroup, Button} from "../../../src";
</script>
