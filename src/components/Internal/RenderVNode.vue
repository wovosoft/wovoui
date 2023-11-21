<script setup lang="ts">
import {createTextVNode, isVNode} from "vue";

defineProps(['content']);

defineOptions({
	inheritAttrs: false
});

</script>

<template>
	<component :is="content" v-if="isVNode(content)"></component>
	<component :is="createTextVNode(content)" v-else></component>
</template>
