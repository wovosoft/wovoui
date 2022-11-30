---
layout: false
---

<script setup>
import { ref, onMounted } from 'vue';
import { createApp } from 'whyframe:app';


const el = ref();

onMounted(() => {
  createApp(el.value);
});
</script>

<div id="vp-app" ref="el"></div>

