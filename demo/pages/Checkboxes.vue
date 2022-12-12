<template>
    <div>
        <Checkbox
            v-model="dmodel"
            :value="dvalue.checked"
            unchecked-value="Unchecked">
            Checkbox With Unchecked Value
        </Checkbox>
        <Checkbox
            v-model="dmodel"
            :value="dvalue.checked">
            Checkbox Without Unchecked Value
        </Checkbox>
        {{ dmodel }}
        <hr/>

        <h3>Array Model</h3>

        <Row>
            <Col :md="6" :sm="12">
                <Checkbox v-for="m in ['one','two','three']" :value="m" v-model="arrayModel">
                    {{ m }}
                </Checkbox>
            </Col>
            <Col :md="6" :sm="12">
                <Checkbox v-for="m in ['one','two','three']" :value="m" v-model="arrayModel">
                    {{ m }}
                </Checkbox>
            </Col>
        </Row>
        {{ arrayModel }}
        <hr/>

        <Row>
            <Col :md="6" :sm="12">
                <h3>Switches</h3>
                <Checkbox switch v-for="m in ['one','two','three']" :value="m" v-model="arrayModel">
                    {{ m }}
                </Checkbox>
            </Col>
            <Col :md="6" :sm="12">
                <h3>Inline</h3>
                <Checkbox inline v-for="m in ['one','two','three']" :value="m" v-model="arrayModel">
                    {{ m }}
                </Checkbox>
            </Col>
        </Row>
        {{ arrayModel }}
        <hr/>
        <h3>Groups</h3>
        <Row>
            <Col>
                <CheckboxGroup text-field="text" v-model="group" :options="options"/>
            </Col>
            <Col>
                <CheckboxGroup inline v-model="group" :options="options"/>
            </Col>
        </Row>
        {{ group }}
    </div>
</template>

<script lang="ts" setup>

import {Button, Checkbox, CheckboxGroup} from "../../src/index";
import {reactive, ref} from "vue";
import Row from "../../src/components/Layout/Row";
import Col from "../../src/components/Layout/Col";

const dvalue = reactive({
    checked: 'Checked',
    unchecked: 'Unchecked'
});

const dmodel = ref('Unchecked');

const arrayModel = ref(['two']);

const options = [
    {text: 'Item 1', value: 'first'},
    {text: 'Item 2', value: 'second'},
    {text: 'Item 4'},
    {text: 'Item 5', value: {foo: 'bar', baz: true}}
]

const group = ref([options[1]]);

</script>
