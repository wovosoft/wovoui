<template>
    <Input v-model="ratio" class="my-3"/>
<!--    <Aspect :ratio="ratio">-->
<!--        <iframe src="https://www.youtube.com/embed/kWxGnt5TGms"-->
<!--                title="CRACKÉ - SUDDEN BREAK | Cartoon Animation | Compilation" frameborder="0"-->
<!--                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--                allowfullscreen></iframe>-->
<!--    </Aspect>-->

    <h3>Placeholder</h3>

    <Placeholder :col="12" glow wave/>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {Input} from "@/";
import Placeholder from "../../components/Ui/Placeholder.vue";

const ratio = ref<string>('21x9');
</script>
