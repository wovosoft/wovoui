<template>
    <Table v-bind="{...propBindings}">
        <THead>
        <Th v-for="(th,th_key) in fields" :key="th_key">
            {{ th }}
        </Th>
        </THead>
    </Table>
</template>

<script>
import {computed, defineComponent, reactive} from "vue";
import {make, makeString} from "../shared/properties.js";
import Table from "./Table.vue";
import tableProps from "../shared/tableProps.js";
import THead from "./THead.vue";
import Th from "./Th.vue";

export default defineComponent({
    name: "DataTable",
    components: {Th, THead, Table},
    props: {
        ...tableProps,
        fields: make(Array, []),
        items: make(Array, [])
    },
    setup(props) {
        props = reactive(props);
        const classes = computed(() => {
            return [
                "table"
            ];
        });
        const propBindings = reactive({});
        for (let x in Object.keys(tableProps)) {
            propBindings[x] = props[x];
        }
        return {
            classes,
            propBindings
        }
    }
})
</script>