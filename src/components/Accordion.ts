import {defineComponent, h, PropType, reactive, ref, provide, computed} from "vue";

export default defineComponent({
    name: "Accordion",
    emits: ['update:modelValue'],
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "div"},
        modelValue: {type: Number as PropType<number>, default: null},
        flush: {type: Boolean as PropType<boolean>, default: false},
        alwaysOpen: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, {expose, slots, emit}) {
        const activeItem = ref(null);
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
            [slots.default()]
        )
    }
})
