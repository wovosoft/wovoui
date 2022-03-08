<template>
    <Accordion>
        <template v-for="(item,item_key) in items">
            <AccordionItem v-if="Array.isArray(item.children) && item.children.length>0"
                           :key="item_key"
                           body-class="p-0"
                           :style="style"
                           :header="item?.text||item?.title">
                <Menu child :items="item.children"/>
            </AccordionItem>
            <div class="accordion-item" v-else :style="style">
                <div class="accordion-body">
                    <ChevronRight v-if="child"/>
                    {{ item?.text || item?.title }}
                </div>
            </div>
        </template>
    </Accordion>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem.vue";
import {ChevronRight} from "@wovosoft/wovoui-icons";

export default defineComponent({
    name: "Menu",
    components: {AccordionItem, Accordion, ChevronRight},
    props: {
        items: {type: Array as PropType<object[] | string[]>, default: () => ([])},
        child: {type: Boolean as PropType<boolean>, default: false}
    },
    setup(props, {slots}) {
        return {
            style: computed(() => {
                if (props.child) {
                    return {
                        borderLeft: 0,
                        borderRight: 0,
                        borderRadius: 0
                    }
                }
                return null;
            })
        }
    }
})
</script>