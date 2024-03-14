<template>
    <div class="pb-5">
        <h4>Form Group</h4>
        <FormGroup
            label="This is label"
            floating
            :valid-feedback="messages.valid"
            :invalid-feedback="messages.invalid">
            <Input :state="true" v-model="messages.valid"/>
        </FormGroup>


        <h3>Default</h3>
        <Input v-model="model" placeholder="Default Input"/>

        <h3 class="mt-3">Small</h3>
        <Input v-model="model" size="sm" placeholder="Default Input"/>

        <h3 class="mt-3">Large</h3>
        <Input v-model="model" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">Valid State</h3>
        <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">Invalid State State</h3>
        <Input v-model="model" :state="false" size="lg" placeholder="Default Input"/>

        <h3 class="mt-3">valid State State</h3>
        <FormGroup>
            <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>
            <Feedback>Valid Feedback</Feedback>
            <Feedback type="invalid">Invalid Feedback</Feedback>
        </FormGroup>

        <h3 class="mt-3">Feed Messages</h3>
        <FormGroup valid-feedback="Valid Feedback">
            <Input v-model="model" :state="true" size="lg" placeholder="Default Input"/>
        </FormGroup>

        <div class="mt-3">{{model}}</div>

        <Row>
            <Col>
                <h3 class="mt-3">Radio</h3>
                <Radio v-for="r in ['one','two','three','four','five','six','seven','eight']"
                       :value="r" v-model="radio">
                    {{r}}
                </Radio>
                Radio Value : {{radio}}
            </Col>
            <Col>
                <h3 class="mt-3">Radio</h3>
                <Radio v-for="r in ['one','two','three','four','five','six','seven','eight']"
                       :value="r" v-model="radio">
                    {{r}}
                </Radio>
                Radio Value : {{radio}}
            </Col>
        </Row>
        <h3>Range</h3>
        <Range v-model="range"/>
        {{range}}

        <h3>Rating {{rate}}</h3>
        <Rating v-model="rate" :max="5"/>

        <h3>Spin Button</h3>
        <SpinButton v-model="rate"/>

        <h3 class="mt-5">Tags</h3>
        <Tags/>

        <h3 class="mt-5">Form Control</h3>
        <FormControl label="Form Control" v-model="model"/>

        <h3 class="mt-5">Form Select</h3>

        <Select
            text-field="text"
            value-field="value"
            multiple
            v-model="multipleSelect"
            :options="Array.from({length: 10}, (_, i) => ({text:`Text ${i}`,value:`Value ${i}`}))">

        </Select>

        Result: {{multipleSelect}}


        <h3 class="mt-5">Autocomplete</h3>
<!--        <Autocomplete-->
<!--            v-model="model"-->
<!--            :options="Array.from({ length: 70 }, (value, index) => 'OP-'+index)"-->
<!--        />-->
    </div>
</template>

<script lang="ts" setup>

import {
    Col, Feedback, FormGroup, Input, Radio,
    Rating, Row, SpinButton, Tags, Range, FormControl
} from "@/components";

import {reactive, ref} from "vue";
import Select from "@/components/Form/Select.vue";


const model = ref(123);
const range = ref(65);
const rate = ref(3);
const radio = ref('three');
const multipleSelect=ref([]);
const messages = reactive({
    valid: "Valid Message",
    invalid: "Invalid Message"
});
</script>
