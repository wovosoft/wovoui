<template>
    <Container class="mt-5">
        <h3>Append</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            :get-items="getItems">
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Prepend</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
            <template #prepend>
                <Button>Prepend</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Default</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
        </TypeHead>

        <h3 class="mt-5">Prepend & Append</h3>
        <TypeHead
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            :get-items="getItems">
            <template #prepend>
                <Button>Prepend</Button>
            </template>
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>

        <h3 class="mt-5">Small</h3>
        <TypeHead
            toggle-size="sm"
            v-model="model"
            :get-option="v=>v.text"
            :get-label="v=>v?v.text:'Not Selected'"
            api-url="https://api.github.com/search/repositories">
            <template #append>
                <Button>Append</Button>
            </template>
        </TypeHead>
        <br/>
        {{ model }}
        <Button @click="model=null">Reset</Button>
    </Container>
</template>

<script lang="ts" setup>

import TypeHead from "../../src/components/Form/TypeHead.vue";
import {Button, Container} from "../../src";
import {ref} from "vue";

const model = ref();

function getItems(items, query) {
    let its = [];
    for (let x=0;x<=50;x++) {
        its.push({
            text: 'Text ' + x,
            value: 'Value ' + x
        });
    }

    items.value = its;
}
</script>
