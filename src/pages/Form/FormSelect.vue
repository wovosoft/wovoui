<template>
    <h1>Form Select</h1>
    <p>
        Bootstrap custom <code>&lt;select&gt;</code> using custom styles. Optionally specify options based on an array,
        array of objects, or an object.
    </p>
    <p>
        Generate your select options by passing an array or object to the options props:
    </p>

    <Select :options="options"/>
    <Highlight :code="example1"/>

    <p>
        You can even define option groups with the options prop:
    </p>

    <Select :options="optionGroups" v-model="selectedGroupedOption"/>
    <p class="p-2">
        Selected Value: {{ selectedGroupedOption }}
    </p>
    <Tabs>
        <Tab title="Code" active>
            <Highlight code='<Select :options="options" v-model="selected"/>
<p class="p-2">
    Selected Value: {{ selected }}
</p>'/>
        </Tab>
        <Tab title="options">
            <Highlight :code="JSON.stringify(optionGroups,null,'    ')"/>
        </Tab>
    </Tabs>

    <h2>Changing the option field names</h2>
    <p>
        If you want to customize the field property names (for example using name field for display text) you can easily
        change them by setting the <code>text-field</code>, <code>html-field</code>, <code>value-field</code>,
        and <code>disabled-field</code> props to a string that
        contains the property name you would like to use:
    </p>
    <Select
        v-model="example3"
        :options="options3"
        class="mb-3"
        value-field="item"
        text-field="name"
        disabled-field="notEnabled"
    ></Select>

    <div class="mt-3">Selected: <strong>{{ example3 }}</strong></div>
</template>

<script>
import Select from "../../components/Select.vue";
import {ref} from "vue";
import Highlight from "../../components/Highlight.ts";
import Tabs from "../../components/Tabs.vue";
import Tab from "../../components/Tab.vue";

export default {
    name: "FormSelect",
    components: {Tab, Tabs, Highlight, Select},
    setup(props) {
        const options = [
            {value: null, text: 'Please select an option'},
            {value: 'a', text: 'This is First option'},
            {value: 'b', text: 'Selected Option'},
            {value: {C: '3PO'}, text: 'This is an option with object value'},
            {value: 'd', text: 'This one is disabled', disabled: true}
        ];
        const optionGroups = [
            {value: null, text: 'Please select an option'},
            {value: 'a', text: 'This is First option'},
            {value: 'b', text: 'Selected Option', disabled: true},
            {
                label: 'Grouped options',
                options: [
                    {value: {C: '3PO'}, text: 'Option with object value'},
                    {value: {R: '2D2'}, text: 'Another option with object value'}
                ]
            }
        ]
        const options3 = [
            {item: 'A', name: 'Option A'},
            {item: 'B', name: 'Option B'},
            {item: 'D', name: 'Option C', notEnabled: true},
            {item: {d: 1}, name: 'Option D'}
        ];
        return {
            selected: ref(null),
            selectedGroupedOption: ref(null),
            example3: ref(null),
            options,
            optionGroups,
            options3,
            example1: '<template>\n' +
                '    <Select :options="options"/>\n' +
                '</template>\n' +
                '<script>\n' +
                'export default {\n' +
                '    data() {\n' +
                '        return {\n' +
                '            selected: null,\n' +
                '            options:' + JSON.stringify(options, null, '    ') +
                '        }\n' +
                '    }\n' +
                '}\n' +
                '<\/script>'
        }
    }
}
</script>