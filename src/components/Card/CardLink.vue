<script lang="ts" setup>
import {type CardLinkPropsInterface} from "@/components";

withDefaults(defineProps<CardLinkPropsInterface>(), {
  href: '#'
});
</script>

<template>
  <a :href="href" class="card-link">
    <slot></slot>
  </a>
</template>