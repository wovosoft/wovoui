<template>
    <Table v-bind="otherProps">
        <THead>
        <Th v-for="(th,th_index) in fields"
            @click="applySorting(th)"
            :style="{'cursor':th.sortable===true?'pointer':'default'}"
            :key="th_index">
            <slot :name="'head('+th.key+')'"
                  :column="th.key"
                  :field="th"
                  :index="th_index"
                  :label="getLabel(th)"
                  :selectedAllRows="false">
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
                      :value="getValue(row,th,th_index)">
                    {{ getValue(row, th, th_index) }}
                </slot>
            </Td>
        </Tr>
        </TBody>
    </Table>
</template>

<script>
import {computed, defineComponent, reactive, ref} from "vue";
import {make} from "../shared/properties.js";
import Table from "./Table.vue";
import tableProps from "../shared/tableProps.js";
import THead from "./THead.vue";
import Th from "./Th.vue";
import TBody from "./TBody.vue";
import Tr from "./Tr.vue";
import Td from "./Td.vue";
import {isObject, title} from "../shared/utilities.js";
import {lowerCase} from "lodash/string.js";
import {orderBy} from "lodash";
import Icon from "./Icon.vue";

export default defineComponent({
    name: "DataTable",
    components: {Icon, Tr, TBody, Th, Td, THead, Table},
    props: {
        ...tableProps,
        fields: make(Array, []),
        items: make(Array, [])
    },
    setup(props) {
        props = reactive(props);

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
                console.log(sorting.value)
            }
        };
        const classes = computed(() => {
            return [
                "table"
            ];
        });
        const {items, fields, ...otherProps} = props;
        const getLabel = (th) => {
            if (isObject(th)) {
                if (th.hasOwnProperty('label')) {
                    return th.label;
                } else if (th.hasOwnProperty('key')) {
                    return title(th.key);
                }
            }
            return th;
        };
        const getValue = (row, th, th_index) => {
            let key = getKey(th);
            if (isObject(th)) {
                if (th.hasOwnProperty('formatter')) {
                    return th.formatter(row, key);
                }
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
            return props.items;
        });

        const clearSorting = () => {
            sorting.value.sortBy = null;
            sorting.value.sort = null;
        }
        return {
            classes,
            otherProps,
            getLabel,
            getValue,
            getKey,
            sorting,
            applySorting,
            itemsSorted,
            clearSorting
        }
    }
})
</script>
