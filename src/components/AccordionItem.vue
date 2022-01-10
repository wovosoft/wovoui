<template>
  <div class="accordion-item">
    <AccordionHeader v-model="visible" @update:modelValue="clicked">
      {{ header }}
    </AccordionHeader>
    <div class="accordion-collapse" :class="bodyClass">
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {makeBoolean, makeNumber, makeString} from "../shared/properties.js";
import AccordionHeader from "./AccordionHeader.vue";
import {reactive, ref} from "vue";

export default {
  name: "AccordionItem",
  emits: ['update:modelValue', 'update:index'],
  components: {AccordionHeader},
  props: {
    header: makeString(),
    modelValue: makeBoolean(false),
    index: makeNumber(null)
  },
  inject: ['alwaysOpen'],
  setup(props, {}) {
    const visible = ref(props.modelValue);
    return {
      bodyClass: reactive({show: false, collapsing: false, collapse: true}),
      visible
    }
  },
  watch: {
    visible(val) {
      this.bodyClass.show = val;
    },
    index(val) {
      this.visible = this.index === this.myIndex;
    }
  },
  mounted() {
    this.visible = this.index === this.myIndex;
  },
  computed: {
    myIndex() {
      let accordions = this.$el.parentNode.children
      for (let x = 0; x < accordions.length; x++) {
        if (accordions[x].isSameNode(this.$el)) {
          return x;
        }
      }
    }
  },
  methods: {
    clicked() {
      this.$emit("update:index", this.myIndex);
    }
  }
}
</script>