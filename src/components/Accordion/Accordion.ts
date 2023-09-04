import {defineComponent, h, provide, reactive, ref} from "vue";
import accordionProps from "@/shared/accordionProps";
import {getBinaryClasses} from "@/composables/useClasses";

import {AccordionItemStateType} from "@/index";

export default defineComponent({
    name: "Accordion",
    emits: ['update:modelValue'],
    props: accordionProps,
    setup(props, {expose, slots, emit}) {
        const activeItem = ref<AccordionItemStateType>();
        const items: AccordionItemStateType[] = reactive([]);

        provide("registerItem", (item: AccordionItemStateType) => items.push(item));

        provide("setActiveItem", (item: AccordionItemStateType): void => {
            activeItem.value = item;
            emit('update:modelValue', items.indexOf(item));

            if (!props.alwaysOpen) {
                items.filter((i: AccordionItemStateType): boolean => i !== item)
                    .forEach((i: AccordionItemStateType): boolean => i.value = false);
            }
        });

        expose({
            toggleAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = !i.value),
            openAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = true),
            collapseAll: () => items.forEach((i: AccordionItemStateType): boolean => i.value = false)
        });

        return () => h(
            props.tag,
            {
                class: [
                    'accordion', getBinaryClasses({
                        accordionFlush: props.flush
                    })
                ]
            },
            slots?.default?.()
        )
    }
})
