<template>
  <h2>Default Badges</h2>
  <Badge>
    Normal Badge
  </Badge>
  <Badge pill>
    Pill Badge
  </Badge>
  <Badge pill variant="danger">
    Pill Badge
  </Badge>
  <Badge href="#" variant="danger">
    Actionable Badge
  </Badge>
  <h2>Badge in Button</h2>
  <Button variant="primary">
    Notifications <Badge>4</Badge>
  </Button>
</template>

<script setup>
import Badge from "../components/Badge.vue"
import Button from "../components/Button.vue";
</script>
