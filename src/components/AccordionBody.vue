<template>
  <div class="accordion-collapse collapse" :class="{'collapsing':modelValue}">
    <div class="accordion-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionBody"
}
</script>

<style scoped>

</style>