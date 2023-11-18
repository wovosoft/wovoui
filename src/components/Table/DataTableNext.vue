<script setup lang="ts">
import {PropType} from "vue";
import {ClassTypes, makeVariant, title} from "@/index";
import tableProps from "@/shared/tableProps";
import {Table, THead, TBody, TFoot, Tr, Th, Td} from "@/components/Table";
import RenderVNode from "@/components/Internal/RenderVNode.vue";

interface FieldType {
    key: string;
    label?: string;
    formatter?: (item: ItemType, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: ClassTypes;
    tdClass?: ClassTypes;
}

type ItemType = Record<string, any>[];

const props = defineProps({
    ...tableProps,
    fields: Array as PropType<FieldType[] | string[]>,
    items: Array as PropType<ItemType[]>,
    headVariant: makeVariant(null),
    bodyVariant: makeVariant(null),
    footVariant: makeVariant(null),
    headClass: {type: [Array, String, Object] as PropType<ClassTypes>, default: null},
    bodyClass: {type: [Array, String, Object] as PropType<ClassTypes>, default: null},
    footClass: {type: [Array, String, Object] as PropType<ClassTypes>, default: null},
});

const {
    items,
    fields,
    headVariant,
    bodyVariant,
    footVariant,
    headClass,
    bodyClass,
    footClass,
    ...propsForTable
} = props;

const getLabel = (field: FieldType | string) => {
    if (typeof field === 'string') {
        return title(field);
    }

    return field?.label || title(field.key);
};

const getKey = (field: FieldType | string): string => {
    if (typeof field === 'string') {
        return field;
    }

    return field.key;
};

const getValue = (row: ItemType, field: FieldType | string): any => {
    const key = getKey(field);

    if (typeof field === "object" && typeof field.formatter === "function") {
        return field.formatter(row, key);
    }

    if (!Array.isArray(row)) {
        return row?.[key];
    }
    return row;
};
</script>

<template>
    <Table v-bind="propsForTable">
        <THead>
        <Tr>
            <Th v-for="(field,field_key) in fields" :key="field_key">
                <slot :name="`head(${getKey(field)})`"
                      :column="getKey(field)"
                      :field="field"
                      :index="field_key"
                      :label="getLabel(field)">
                    <RenderVNode :content="getLabel(field)"/>
                </slot>
            </Th>
        </Tr>
        </THead>
        <TBody>
        <Tr v-for="(row,row_key) in items" :key="row_key">
            <Td v-for="(field,field_key) in fields" :key="field_key">
                <slot :name="`cell(${getKey(field)})`"
                      :item="row"
                      :index="field_key"
                      :field="field"
                      :value="getValue(row,field)">
                    <RenderVNode :content="getValue(row, field)"/>
                </slot>
            </Td>
        </Tr>
        </TBody>
        <TFoot v-if="$slots.footer" :variant="footVariant" :class="footClass">
        <slot name="footer"></slot>
        </TFoot>
    </Table>
</template>
