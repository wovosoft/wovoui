<script lang="ts" setup>
import {Badge, Button} from '@/';
import {colors} from "../assets";
</script>

<template>
    <h3>Default Badge</h3>
    <Button variant="primary">
        Button Content
        <Badge>Badge</Badge>
    </Button>

    <h3>Background colors</h3>
    <Badge v-for="color in colors" class="me-3" :variant="color">{{ color }}</Badge>

    <h3>Pill badges </h3>
    <Badge pill v-for="color in colors" class="me-3" :variant="color">{{ color }}</Badge>

    <h3>Badge Position</h3>
    <div>
        <Button class="m-5 position-relative" v-for="pos in ['top-right' , 'top-left' , 'bottom-right' , 'bottom-left']">
            {{ pos }}
            <Badge variant="primary" :position="pos">
                2
            </Badge>
        </Button>
    </div>
</template>