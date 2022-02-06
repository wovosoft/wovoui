<template>
    <div class="accordion" :class="{'accordion-flush':flush}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive, ref} from "vue";
import {makeNumber} from "../shared/properties";

export default defineComponent({
    name: "Accordion",
    emits: ['update:modelValue'],
    props: {
        modelValue: makeNumber(null),
        flush: {type: Boolean as PropType<Boolean>, default: false},
        alwaysOpen: {type: Boolean as PropType<Boolean>, default: false}
    },
    provide() {
        return {
            registerItem: (item) => this.items.push(item),
            setActiveItem: item => {
                this.activeItem = item;
                this.$emit('update:modelValue', this.items.indexOf(item));
                if (!this.alwaysOpen) {
                    this.items.filter(i => i !== item).forEach(i => i.value = false);
                }
            }
        }
    },
    setup(props, context) {
        const activeItem = ref(null);
        const items = reactive([]);

        context.expose({
            toggleAll: () => items.forEach(i => i.value = !i.value),
            openAll: () => items.forEach(i => i.value = true),
            collapseAll: () => items.forEach(i => i.value = false)
        });

        return {
            items,
            activeItem
        }
    }
})
</script>
