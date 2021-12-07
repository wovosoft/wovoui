<template>
    <h2>Data Table</h2>
    <p>
        <code>DataTable</code> component uses <code>Table</code> component under the hood. Reason, these two
        components are separated because, we don't need full featured datatable for a simple table. The
        <code>DataTable</code> component has all the properties of the component <code>Table</code>.
        The <code>DataTable</code> component has some extra features like-
    </p>
    <ol>
        <li v-for="l in ['serverside data fetching','sorting in local and serverside',
         'filtering both in local and serverside',
        'pagination both in local and serverside', 'rows editing',' cell editing',
        'columns visibility', 'rows selection and so on']">
            {{ l }}
        </li>
    </ol>

    <h2>Sample Table</h2>
    <TheDatatable :fields="fields1" :items="items1" :bordered="true"/>

    <h2>Table Head</h2>
    <p>
        When fields are not provided table head is automatically generated from the first row of the provided items
        (see, next section) . But if fields are explicitly provided, then head is generated from the provided
        fields.
    </p>

    <h5>Fields can be a plain javascript Array</h5>
    <p>
        When fields property is just a plain javascript <code>Array</code>, each element of the array,
        will be converted to lowercase to be key to retrieve data from the items array.
    </p>
    <Card header="Plain Field Array" class="mb-3">
        <highlightjs language="javascript" :code="'const fields = '+JSON.stringify(fields1,null,'    ')"/>
    </Card>

    <h5>Fields can be an <code>array</code> of <code>objects</code></h5>
    <Card header="Array of Object" class="mb-3">
        <highlightjs
            language="javascript"
            code="const fields = [
    {key: 'id', label: 'ID'},
    {key: 'name'},
    {key: 'age', formatter: v => v.age},
]"/>
    </Card>

    <h2>Items (record data)</h2>
    <p>
        <code>items</code> is the table data in array format, where each record (row) data are keyed objects.
    </p>
    <Card header="Example format of table items:" class="mb-3">
        <highlightjs
            language="javascript"
            :code="'const persons = '+JSON.stringify(items2,null,'    ')"
        />
    </Card>
    <h5>Items can be plain <code>array</code> too!</h5>
    <p>
        When items are plain array, fields won't have any effects in data manipulation.
    </p>
    <Card class="mb-3">
        <highlightjs
            language="javascript"
            code="const items=[
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]"/>
    </Card>
    <h2>Table with items and fields</h2>
    <Tabs class="mb-3">
        <Tab title="Template" active>
            <highlightjs language="xml" code='<Datatable
    :fields="fieldsObject"
    :items="items2"
    bordered
    striped
    hover>
</Datatable>'/>
        </Tab>
        <Tab title="Script">
            <highlightjs
                language="javascript"
                code='export default{
    setup(props){
        const person = () => ({
            id: Math.round(Math.random() * 1000),
            name: (Math.random() + 1).toString(36).substring(7),
            age: Math.round(Math.random() * 100)
        });
        const fieldsObject = reactive([
            {key: "id", label: "ID"},
            {key: "name"},
            {key: "age", formatter: v => v.age},
        ]);
        const items2 = reactive([
            person(),
            person(),
            person(),
            person(),
            person()
        ]);
        return {
            fieldsObject,
            items2
        }
    }
}'/>
        </Tab>
        <Tab title="Output">
            <TheDatatable
                :fields="fieldsObject"
                :items="items2"
                bordered
                striped
                hover>
            </TheDatatable>
        </Tab>
    </Tabs>

    <h2>Using Slots in Data Cells</h2>
    <p>
        Sometimes, it might be necessary to make some custom components, inside datatable, in that case
        table data slots can be used.
    </p>
    <Tabs>
        <Tab title="Template" active>
            <highlightjs
                language="xml"
                code='<Datatable :fields="fieldsObject" :items="items2">
    <template #cell(id)="row">
        {{row.item.id}}
    </template>
    <template #cell(name)="row">
        {{row.item.name}}
    </template>
</Datatable>'
            />
        </Tab>
        <Tab title="Script">
            <highlightjs
                language="javascript"
                code='export default{
    setup(props){
        const person = () => ({
            id: Math.round(Math.random() * 1000),
            name: (Math.random() + 1).toString(36).substring(7),
            age: Math.round(Math.random() * 100)
        });
        const fieldsObject = reactive([
            {key: "id", label: "ID"},
            {key: "name"},
            {key: "age", formatter: v => v.age},
        ]);
        const items2 = reactive([
            person(),
            person(),
            person(),
            person(),
            person()
        ]);
        return {
            fieldsObject,
            items2
        }
    }
}'/>
        </Tab>
        <Tab title="Output">
            <TheDatatable :fields="fieldsObject" :items="items2" bordered>
                <template #cell(id)="row">
                    {{ row.item.id }}
                </template>
                <template #cell(name)="row">
                    {{ row.item.name }}
                </template>
            </TheDatatable>
        </Tab>
    </Tabs>
    <h2>Sorting By Column</h2>
    <Input v-model="filter" type="search"/>
    {{ selectedRows }}
    <br/>
    <ButtonGroup size="sm">
        <Button @click="$refs.thedata?.selectAllRows()">Select All</Button>
        <Button @click="$refs.thedata?.unselectAllRows()">Unselect All</Button>
    </ButtonGroup>
    <TheDatatable
        ref="thedata"
        v-model:filter="filter"
        v-model:selected-rows="selectedRows"
        :items="items2"
        :fields="fieldsSortable">
        <template #head(select)="{selectAllRows,unselectAllRows,selectedAllRows}">
            <div style="padding-left: 7px;">
                <Checkbox
                    :checked="selectedAllRows"
                    style="min-height: auto;"
                    @checked="selectAllRows"
                    @unchecked="unselectAllRows"
                />
            </div>
        </template>
        <template #cell(select)="row">
            <Checkbox :value="row.item" v-model="selectedRows"/>
        </template>
    </TheDatatable>
</template>

<script>
import TheDatatable from "./../../components/DataTable.vue"
import {reactive, ref} from "vue";
import Card from "../../components/Card.vue";
import Row from "../../components/Row.vue";
import Col from "../../components/Col.vue";
import Tabs from "../../components/Tabs.vue";
import Tab from "../../components/Tab.vue";
import Input from "../../components/Input.vue";
import Checkbox from "../../components/Checkbox.vue";
import Button from "../../components/Button.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";

export default {
    name: "DataTable",
    components: {
        ButtonGroup,
        Button,
        Checkbox,
        Input,
        Tab,
        Tabs,
        Col,
        Card,
        TheDatatable,
        Row
    },
    setup(props) {
        const fields1 = reactive([
            "One",
            "Two",
            "three"
        ]);

        const items1 = reactive([
            [...Array(3).keys()].map(i => i + 1),
            [...Array(3).keys()].map(i => i + 1),
            [...Array(3).keys()].map(i => i + 1),
            [...Array(3).keys()].map(i => i + 1),
            [...Array(3).keys()].map(i => i + 1),
        ]);

        const fieldsObject = reactive([
            {key: 'id', label: 'ID'},
            {key: 'name'},
            {key: 'age', formatter: v => v.age},
        ]);
        const fieldsSortable = reactive([
            {key: 'select', label: 'select', sortable: false},
            {key: 'id', label: 'ID', sortable: true},
            {key: 'name', sortable: true},
            {key: 'age', sortable: true, formatter: v => v.age},
        ]);

        const person = () => ({
            id: Math.round(Math.random() * 1000),
            name: (Math.random() + 1).toString(36).substring(7),
            age: Math.round(Math.random() * 100)
        });

        const items2 = reactive([
            person(),
            person(),
            person(),
            person(),
            person()
        ]);

        return {
            fields1,
            items1,
            items2,
            fieldsObject,
            fieldsSortable,
            filter: ref(null),
            selectedRows: ref([])
        }
    }
}
</script>
