<script setup lang="ts">
import {isVNode} from "vue";

defineProps(['content']);

defineOptions({
	inheritAttrs: false
});

</script>

<template>
	<component :is="content" v-if="isVNode(content)"></component>
	<div v-else>{{ content}}</div>
</template>
