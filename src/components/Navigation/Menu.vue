<template>
    <Accordion :class="{child:child}" class="menu">
        <template v-for="(item,item_key) in items">
            <AccordionItem
                v-if="Array.isArray(item.children) && item.children.length>0"
                :key="item_key"
                body-class="p-0"
                :style="style"
                :header="item?.text||item?.title">
                <Menu child flush :items="item.children"/>
            </AccordionItem>
            <div class="accordion-item" v-else :style="style">
                <div class="accordion-header">
                    <slot :item="item" name="menu-item">
                        <a v-if="typeof item.link==='string'" :href="item.link"
                           class="accordion-button collapsed menu-link">
                            <ChevronRight v-if="child"/>
                            {{ item?.text || item?.title }}
                        </a>
                        <router-link :to="item.link" v-else-if="typeof item.link==='object'"
                                     class="accordion-button collapsed menu-link">
                            <ChevronRight v-if="child"/>
                            {{ item?.text || item?.title }}
                        </router-link>
                    </slot>
                </div>
            </div>
        </template>
    </Accordion>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import Accordion from "../Accordion/Accordion.vue";
import AccordionItem from "@/components/Accordion/AccordionItem.vue";
//@ts-ignore
import {ChevronRight} from "@wovosoft/wovoui-icons";
import {MenuProps} from "@/components/Accordion";

const props = withDefaults(defineProps<MenuProps>(), {
    tag: 'div',
    items: () => [],
    ps: 10
});

const style = computed(() => {
    if (props.child) {
        return {
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
            // paddingLeft: props.ps + "px"
        }
    }
    return;
})
</script>
<style scoped>
.menu .menu-link:after {
    display: none;
}

.menu a.accordion-button {
    text-decoration: none;
}

.menu .accordion-button:not(.collapsed) {
    box-shadow: none !important;
}

.menu .accordion.child > .accordion-item:last-child {
    border-top: 0 !important;
    border-bottom: 0 !important;
}
</style>