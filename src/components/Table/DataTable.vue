<template>
    <Table v-bind="otherProps">
        <slot name="header">
            <THead :class="headClass" :variant="headVariant">
            <tr>
                <template v-for="(th,th_index) in fields">
                    <th
                        v-if="isVisible(th)"
                        @click="applySorting(th)"
                        :style="{'cursor':(typeof th ==='string' || th?.['sortable'] === true) ? 'pointer' : null}"
                        :key="th_index">
                        <Flex>
                            <FlexItem class="flex-grow-1" :class="typeof th ==='string' ? null:th?.['thClass']">
                                <slot :name="`head(${getKey(th)})`"
                                      :column="getKey(th)"
                                      :field="th"
                                      :index="th_index"
                                      :label="getLabel(th)"
                                      :sortBy="sorting.sortBy"
                                      :sort="sorting.sort">
                                    <RenderVNode :content="getLabel(th)"/>
                                </slot>
                            </FlexItem>
                            <FlexItem v-if="typeof th==='object' && th?.['sortable']===true">
                                <SortDown v-if="sorting.sortBy===th?.['key'] && sorting.sort==='asc'"/>
                                <SortUp v-else/>
                            </FlexItem>
                        </Flex>
                    </th>
                </template>
            </tr>
            </THead>
        </slot>
        <TBody :class="bodyClass" :variant="bodyVariant">
        <tr v-for="(item,item_index) in itemsSorted" :key="item_index">
            <template v-for="(th,th_index) in fields">
                <td :key="th_index" v-if="isVisible(th)" :class="typeof th==='object'?th['tdClass']:null">
                    <slot :name="`cell(${getKey(th)})`"
                          :item="item"
                          :index="item_index"
                          :field="th"
                          :rowSelected="false"
                          :detailsShowing="false"
                          :sortBy="sorting.sortBy"
                          :sort="sorting.sort"
                          :value="getValue(item,th,th_index)">
                        <!--						{{ getValue(row, th, th_index) }}-->
                        <RenderVNode :content="getValue(item, th, th_index)"/>
                    </slot>
                </td>
            </template>
        </tr>
        </TBody>
        <TFoot v-if="$slots.footer" :variant="footVariant" :class="footClass">
        <slot name="footer"></slot>
        </TFoot>
    </Table>
</template>

<script lang="ts" setup generic="ItemType extends DatatableItemType, FieldType extends DatatableFieldType">
import {computed, ComputedRef, ref} from "vue";
import {
    Table, THead, TFoot, TBody,
    DatatableHeadType,
    DatatableProps, DatatableFieldType, DatatableItemType
} from "@/components/Table"

import {Flex, FlexItem,} from "@/components/Layout"
import {isObject, orderBy, title} from "@/shared";
import {SortDown, SortUp} from "@wovosoft/wovoui-icons";
import RenderVNode from "@/components/Internal/RenderVNode.vue";
import getDottedValue from "lodash/get";


const props = withDefaults(defineProps<DatatableProps<ItemType, FieldType>>(), {
    fields: () => [],
    items: () => [],
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
    ...otherProps
} = props;

function isVisible(field: FieldType | string): boolean {
    if (typeof field === 'string') {
        return true;
    }
    //only when visible is false it should be false, and true otherwise
    return field.visible !== false;
}


const getValue = (item: ItemType, field: FieldType | string, field_index: number) => {
    let key = getKey(field);

    //check if key has dot notation
    if (key.includes('.')) {
        return getDottedValue(item, key);
    }

    if (typeof field === 'object' && !Array.isArray(field)) {
        if (typeof field?.formatter === 'function') {
            return field.formatter(item, key);
        }
        return item?.[key];
    } else if (typeof field === "string") {
        return item[key];
    }


    return item[field_index];
};

const getKey = (th: DatatableHeadType | string): string => {
    if (typeof th === 'object' && !Array.isArray(th) && th?.key) {
        return th.key;
    } else if (typeof th === "string") {
        return th.toLowerCase();
    }
    //@ts-ignore
    return th;
};

const sorting = ref<{
    sortBy?: string | null,
    sort: 'asc' | 'desc' | null
}>({
    sortBy: null,
    sort: null
});

const applySorting = (th: DatatableHeadType) => {
    if (typeof th === "object" && th.sortable === true) {
        //when already sorted, key should be available
        if (sorting.value.sortBy === th.key) {
            sorting.value.sort = sorting.value.sort === 'asc' ? 'desc' : 'asc';
        } else {
            sorting.value.sortBy = th.key;
            sorting.value.sort = sorting.value.sort === 'asc' ? 'desc' : 'asc';
        }
    }
};


const getLabel = (th: DatatableHeadType) => {
    if (typeof th === 'object' && !Array.isArray(th)) {
        if (th.hasOwnProperty('label')) {
            return th.label;
        } else if (th.hasOwnProperty('key')) {
            return title(th.key);
        }
    } else if (typeof th === "string") {
        return title(th);
    }
    return th;
};

const filterableColumns = computed(() => {
    let cols: any[] = [];
    if (!Array.isArray(props.fields)) {
        return cols;
    }

    props.fields.forEach(i => {
        if (typeof i === "string") {
            cols.push(i);
        } else if (isObject(i) && i.sortable !== false) {
            cols.push(getKey(i))
        }
    });
    return cols;
});


const itemsSorted = computed(() => {
    if (sorting.value.sortBy) {
        return orderBy(props.items, sorting.value.sortBy);
    }

    if (Array.isArray(props.items)) {
        if (filterableColumns.value.length && props.filter) {
            return props.items.filter(row => {
                if (Array.isArray(row)) {
                    console.log(row)
                } else if (isObject(row)) {
                    return filterableColumns.value.reduce((cond, col) => cond || row[col].toString().search(props.filter) > -1, false)
                }
                return true;
            });
        }
        return props.items;
    }
    //do something else for Promises and Functions
    return props.items;
}) as ComputedRef<ItemType[]>;
</script>
