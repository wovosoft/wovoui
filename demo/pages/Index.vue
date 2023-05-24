<template>
    <Container>
        <h3>wovoui</h3>
        wovoui is an impmentation of Bootstrap 5 components in vue 3. It is developed by
        Narayan Adhikary at wovosoft
        <RadioGroup
            inline
            v-model="rg"
            :options="[{text:'Hello',value:'hello'},{text: 'World',value: 'world'}]"
            text-field="text"
            value-field="value"
        />
        <RadioGroup
            inline
            v-model="rg"
            :options="[{text: 'World',value: 'world'},{text:'Hello',value:'hello'}]"
            text-field="text"
            value-field="value"
        />
        <span>{{rg}}</span>

        <!--        <h3>Spinner</h3>-->
        <!--        <Spinner></Spinner>-->
    </Container>
</template>

<script lang="ts" setup>
import {Container} from "../../src";
import Spinner from "../../src/components/Indicators/Spinner";
import RadioGroup from "../../src/components/Form/RadioGroup.vue";
import Radio from "../../src/components/Form/Radio.vue";
import {ref} from "vue";

const rg = ref('hello')
</script>
