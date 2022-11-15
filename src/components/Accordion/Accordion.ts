import {defineComponent, h, reactive, ref, provide, computed, Ref} from "vue";
import accordionProps from "../../shared/accordionProps";

export default defineComponent({
    name: "Accordion",
    emits: ['update:modelValue'],
    props: accordionProps,
    setup(props, {expose, slots, emit}) {
        const activeItem: Ref<boolean> = ref(null);
        const items = reactive([]);

        provide("registerItem", (item) => items.push(item));
        provide("setActiveItem", (item) => {
            activeItem.value = item;
            emit('update:modelValue', items.indexOf(item));
            if (!props.alwaysOpen) {
                items.filter(i => i !== item).forEach(i => i.value = false);
            }
        });

        expose({
            toggleAll: () => items.forEach(i => i.value = !i.value),
            openAll: () => items.forEach(i => i.value = true),
            collapseAll: () => items.forEach(i => i.value = false)
        });
        const classes = computed(() => ['accordion', {'accordion-flush': props.flush}]);
        return () => h(
            props.tag,
            {class: classes.value},
            slots.default ? slots.default() : null
        )
    }
})
