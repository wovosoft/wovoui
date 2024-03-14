<script lang="ts" setup>
import {IconProps} from "@/components";

withDefaults(defineProps<IconProps>(), {
    tag: "i"
});
</script>
<template>
    <component :is="tag" :class="[ 'bi',{['bi-' + icon]: icon}]"></component>
</template>