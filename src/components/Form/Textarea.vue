<script lang="ts" setup>
import {TextareaProps} from "@/index";

withDefaults(defineProps<TextareaProps>(), {});

const model = defineModel<string | number>();
</script>

<template>
    <textarea v-model="model" class="form-control" :class="{['form-control-'+size]:!!size}"></textarea>
</template>