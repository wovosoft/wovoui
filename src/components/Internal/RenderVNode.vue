<script setup lang="ts">
import {isVNode} from "vue";

defineProps(['content']);
</script>

<template>
	<component :is="content" v-if="isVNode(content)"></component>
	<template v-else>{{ content }}</template>
</template>
