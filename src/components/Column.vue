<template>
    <component :is="tag" :class="{['text-'+actionsAlignment]:actions}">
        <slot :field="field" :data="item">
            <template v-if="typeof formatter==='function'">
                {{ formatter(item) }}
            </template>
            <template v-else-if="actions">
                <slot name="actions_group_prepend" :item="item" :setCurrentItem="setCurrentItem"></slot>
                <ButtonGroup :size="actionsSize">
                    <slot name="actions_prepend" :item="item" :setCurrentItem="setCurrentItem"></slot>
                    <Button :variant="viewVariant" @click="()=>{
                        showViewModal=true;
                        setCurrentItem(item);
                    }">
                        <Eye/>
                    </Button>
                    <Button :variant="editVariant" @click="()=>{
                        showCreateUpdateModal=true;
                        setCurrentItem(item);
                    }">
                        <PencilSquare/>
                    </Button>
                    <Button :variant="destroyVariant" @click="processDelete(item)">
                        <Trash/>
                    </Button>
                    <slot name="actions_append" :item="item" :setCurrentItem="setCurrentItem"></slot>
                </ButtonGroup>
                <slot name="actions_group_append" :item="item" :setCurrentItem="setCurrentItem"></slot>
            </template>
            <template v-else>
                {{ item[field] }}
            </template>
        </slot>
    </component>
</template>

<script lang="ts">
import {defineComponent, inject, PropType, Ref} from "vue";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import {Eye, PencilSquare, Trash} from "@wovosoft/wovoui-icons";

import type {ColorVariants} from "../types/colorVariants";
import type {buttonSizes} from "../types/buttonSizes";
import type {classTypes} from "../types/classTypes";

export default defineComponent({
    name: "Column",
    components: {
        Button, ButtonGroup,
        Eye, PencilSquare, Trash
    },
    props: {
        tag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "td"},
        field: {type: String as PropType<string>, default: null},
        label: {type: String as PropType<string>, default: null},
        visible: {type: Boolean as PropType<boolean>, default: true},
        /**
         * When true, it shows default CRUD Buttons
         */
        actions: {type: Boolean as PropType<boolean>, default: false},
        actionsSize: {type: String as PropType<buttonSizes>, default: "sm"},
        viewVariant: {type: String as PropType<ColorVariants>, default: "primary"},
        editVariant: {type: String as PropType<ColorVariants>, default: "dark"},
        destroyVariant: {type: String as PropType<ColorVariants>, default: "danger"},
        actionsAlignment: {type: String as PropType<'start' | 'center' | 'end'>, default: 'end'},

        /**
         * classes prop for th and td.
         */
        thClass: {type: [String, Object, Array] as PropType<classTypes>, default: null},
        tdClass: {type: [String, Object, Array] as PropType<classTypes>, default: null},
        formatter: {type: Function as PropType<(item: Ref<object>) => unknown>, default: null}
    },
    setup(props) {
        const currentItem = inject('currentItem') as Ref<object>;
        return {
            item: inject('item') as Object,
            showViewModal: inject('showViewModal') as Ref<boolean>,
            showCreateUpdateModal: inject('showCreateUpdateModal') as Ref<boolean>,
            processDelete: inject("processDelete") as (item: object) => void,
            currentItem,
            setCurrentItem: inject('setCurrentItem') as (item: object | null) => void,
            getCurrentItemRefInTemplate: () => currentItem as Ref<object>
        }
    }
})
</script>
