<template>
    <Table v-bind="otherProps">
        <THead>
        <Th v-for="(th,th_index) in fields"
            @click="applySorting(th)"
            :style="{'cursor':th.sortable===true?'pointer':null}"
            :key="th_index">
            <slot :name="'head('+th.key+')'"
                  :column="th.key"
                  :field="th"
                  :index="th_index"
                  :label="getLabel(th)"
                  :sortBy="sorting.sortBy"
                  :sort="sorting.sort"
                  :unselectAllRows="unselectAllRows"
                  :selectAllRows="selectAllRows"
                  :selectedAllRows="selectedAllRows">
                {{ getLabel(th) }}
            </slot>
            <template v-if="typeof th==='object'&& th.sortable===true">
                <Icon :icon="sorting.sortBy===th.key && sorting.sort==='asc'?'sort-down':'sort-up'"/>
            </template>
        </Th>
        </THead>
        <TBody>
        <Tr v-for="(row,row_index) in itemsSorted" :key="row_index">
            <Td v-for="(th,th_index) in fields" :key="th_index">
                <slot :name="'cell('+getKey(th)+')'"
                      :item="row"
                      :index="row_index"
                      :field="th"
                      :rowSelected="false"
                      :detailsShowing="false"
                      :sortBy="sorting.sortBy"
                      :sort="sorting.sort"
                      :selectRow="selectRow"
                      :selectedRows="selectedRows"
                      :value="getValue(row,th,th_index)">
                    {{ getValue(row, th, th_index) }}
                </slot>
            </Td>
        </Tr>
        </TBody>
    </Table>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, reactive, ref} from "vue";
import Table from "./Table";
import tableProps from "../shared/tableProps";
import THead from "./THead";
import Th from "./Th";
import TBody from "./TBody";
import Tr from "./Tr";
import Td from "./Td";
import {isObject, title} from "../shared/utilities.js";
import {lowerCase} from "lodash/string.js";
import {orderBy} from "lodash";
import Icon from "./Icon.vue";

export default defineComponent({
    name: "DataTable",
    emits: ['update:selectedRows'],
    components: {Icon, Tr, TBody, Th, Td, THead, Table},
    props: {
        ...tableProps,
        selectedRows: {type: Array as PropType<any[]>, default: () => ([])},
        filter: {type: String as PropType<string>, default: null},
        fields: {type: Array as PropType<any[]>, default: () => ([])},
        items: {type: [Array, Function] as PropType<any[]>, default: () => ([])}
    },
    setup(props, context) {
        const sorting = ref({
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
        const classes = computed(() => []);
        const {items, fields, ...otherProps} = props;
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
                return lowerCase(th);
            }
            return th;
        };

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

        const selectRow = (row) => {
            // if (!selectedRows.value.includes(row)) {
            //     selectedRows.value.push(row);
            // }
        };
        const unselectAllRows = () => context.emit('update:selectedRows', []);
        const selectAllRows = () => context.emit('update:selectedRows', itemsSorted.value);
        const selectedAllRows = computed(() => itemsSorted.value.length === props.selectedRows.length);
        return {
            classes,
            otherProps,
            getLabel,
            getValue,
            getKey,
            sorting,
            applySorting,
            itemsSorted,
            clearSorting,
            filterableColumns,
            selectRow,
            selectAllRows,
            unselectAllRows,
            selectedAllRows
        }
    }
})
</script>
