<template>
    <component :is="tag" class="accordion" :class="{'accordion-flush':flush}">
        <slot></slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, PropType, reactive, ref} from "vue";

export default defineComponent({
    name: "Accordion" as string,
    emits: ['update:modelValue'] as Array<string>,
    props: {
        tag: {type: String as PropType<string>, default: "div"},
        modelValue: {type: Number as PropType<number>, default: null},
        flush: {type: Boolean as PropType<true | false>, default: false},
        alwaysOpen: {type: Boolean as PropType<true | false>, default: false}
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
    setup(props, {expose}) {
        const activeItem = ref(null);
        const items = reactive([]);

        expose({
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
