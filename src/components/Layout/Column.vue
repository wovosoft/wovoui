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
import {Button, ButtonGroup} from "@/components";
import {Eye, PencilSquare, Trash} from "@wovosoft/wovoui-icons";
import type {ButtonSizes, ClassTypes} from "@/index";
import {makeBoolean, makeSize, makeString, makeTag, makeVariant} from "@/composables";

export default defineComponent({
    name: "Column",
    components: {
        Button, ButtonGroup,
        Eye, PencilSquare, Trash
    },
    props: {
        tag: makeTag("td"),
        field: makeString(),
        label: makeString(),
        visible: makeBoolean(true),
        /**
         * When true, it shows default CRUD Buttons
         */
        actions: makeBoolean(false),
        actionsSize: makeSize<ButtonSizes>("sm"),
        viewVariant: makeVariant("primary"),
        editVariant: makeVariant("dark"),
        destroyVariant: makeVariant("danger"),
        actionsAlignment: {type: String as PropType<'start' | 'center' | 'end'>, default: 'end'},

        /**
         * classes prop for th and td.
         */
        thClass: {type: [String, Object, Array] as PropType<ClassTypes>, default: null},
        tdClass: {type: [String, Object, Array] as PropType<ClassTypes>, default: null},
        formatter: {type: Function as PropType<(item: { [key: string]: any }) => unknown>, default: null}
    },
    setup() {
        const currentItem = inject('currentItem') as Ref<object>;
        return {
            item: inject('item') as { [key: string]: any },
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
