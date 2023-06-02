<template>
    <Table v-bind="otherProps">
        <slot name="header">
            <THead :class="headClass" :variant="headVariant">
            <Tr>
                <template v-for="(th,th_index) in fields">
                    <Th
                        v-if="isVisible(th)"
                        @click="applySorting(th)"
                        :style="{'cursor':(typeof th ==='string' || th.sortable === true) ? 'pointer' : null}"
                        :key="th_index">
                        <Flex>
                            <FlexItem class="flex-grow-1" :class="typeof th ==='string' ? null:th.thClass">
                                <slot :name="`head(${typeof th ==='string' ? th : th.key})`"
                                      :column="getKey(th)"
                                      :field="th"
                                      :index="th_index"
                                      :label="getLabel(th)"
                                      :sortBy="sorting.sortBy"
                                      :sort="sorting.sort">
                                    {{ getLabel(th) }}
                                </slot>
                            </FlexItem>
                            <FlexItem v-if="typeof th==='object' && th.sortable===true">
                                <SortDown v-if="sorting.sortBy===th.key && sorting.sort==='asc'"/>
                                <SortUp v-else/>
                            </FlexItem>
                        </Flex>
                    </Th>
                </template>
            </Tr>
            </THead>
        </slot>
        <TBody :class="bodyClass" :variant="bodyVariant">
        <Tr v-for="(row,row_index) in itemsSorted" :key="row_index">
            <template v-for="(th,th_index) in fields">
                <Td :key="th_index" v-if="isVisible(th)" :class="typeof th==='object'?th.tdClass:null">
                    <slot :name="`cell(${getKey(th)})`"
                          :item="row"
                          :index="row_index"
                          :field="th"
                          :rowSelected="false"
                          :detailsShowing="false"
                          :sortBy="sorting.sortBy"
                          :sort="sorting.sort"
                          :value="getValue(row,th,th_index)">
                        {{ getValue(row, th, th_index) }}
                    </slot>
                </Td>
            </template>
        </Tr>
        </TBody>
        <TFoot v-if="$slots.footer" :variant="footVariant" :class="footClass">
        <slot name="footer"></slot>
        </TFoot>
    </Table>
</template>

<script lang="ts" setup>
import {computed, PropType, ref} from "vue";
import tableProps from "../../shared/tableProps";
/**
 * Minimized import throws following error:
 * Uncaught ReferenceError: Cannot access 'Td' before initialization
 * I DON'T KNOW WHY
 */
import FlexItem from "../Layout/FlexItem.js"
import Flex from "../Layout/Flex.js"
import Table from "./../Table/Table"
import THead from "./../Table/THead"
import TBody from "./../Table/TBody"
import Tr from "./../Table/Tr"
import Th from "./../Table/Th"
import Td from "./../Table/Td"
import TFoot from "./../Table/TFoot"

import {isObject, orderBy, title} from "../../shared/utilities";
import {SortDown, SortUp} from "@wovosoft/wovoui-icons";
import {makeString, makeVariant} from "../../composables/useProps";


type FieldType = {
    key: string;
    label?: string;
    formatter: (item: object, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: any;
    tdClass?: any;
};


function isVisible(field: FieldType | string): boolean {
    if (typeof field === 'string') {
        return true;
    }
    //only when visible is false it should be false, and true otherwise
    return field.visible !== false;
}


const getValue = (row, th, th_index) => {
    let key = getKey(th);
    if (isObject(th)) {
        if (th.hasOwnProperty('formatter')) {
            return th.formatter(row, key);
        }
        return row[key];
    } else if (typeof th === "string") {
        return row[key];
    }
    return row[th_index];
};

const getKey = (th) => {
    if (isObject(th)) {
        return th.key;
    } else if (typeof th === "string") {
        return th.toLowerCase();
    }
    return th;
};

const props = defineProps({
    ...tableProps,
    headClass: {type: [Array, String] as PropType<string | string[]>, default: null},
    bodyClass: {type: [Array, String] as PropType<string | string[]>, default: null},
    footClass: {type: [Array, String] as PropType<string | string[]>, default: null},
    filter: makeString(),
    fields: {type: Array as PropType<FieldType[] | string[]>, default: () => ([])},
    items: {type: [Array, Function] as PropType<any[]>, default: () => ([])},
    headVariant: makeVariant(null),
    bodyVariant: makeVariant(null),
    footVariant: makeVariant(null)
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

const sorting = ref<{
    sortBy: string,
    sort: 'asc' | 'desc'
}>({
    sortBy: null,
    sort: null
});
const applySorting = (th) => {
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


const getLabel = (th) => {
    if (isObject(th)) {
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
    let cols = [];
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
        return orderBy(props.items, sorting.value.sortBy, sorting.value.sort);
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
});

const clearSorting = () => {
    sorting.value.sortBy = null;
    sorting.value.sort = null;
}

</script>
