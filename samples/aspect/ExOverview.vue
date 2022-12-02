<template>
    <Select v-model="ratio" :options="['16x9','21x9','4x3','1x1',50,100]"></Select>
    <Aspect :ratio="ratio">
        <iframe src="https://player.vimeo.com/video/678344029?h=0458dff732"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen></iframe>
    </Aspect>
</template>

<script lang="ts" setup>
import {Select, Aspect} from "../../src";
import {ref} from "vue";

const ratio = ref("16x9");
</script>