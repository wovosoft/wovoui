# Form Input

This component is used to create html `input` element, with bootstrap styling and Vue model bindings. It also has some
other features like modifiers, input debouncing etc.

## Textual and Value inputs

Create various type inputs such as:`text`, `password`, `number`, `url`, `email`, `search`, `range`, `date` and more.

<WInput v-model="text1" placeholder="Enter your name"></WInput>
<div class="mt-2">Value: {{ text1 }}</div>

```vue

<template>
    <Input v-model="text1" placeholder="Enter your name"></Input>
    <div class="mt-2">Value: {{ text1 }}</div>
</template>

<script setup>
import {Input} from "@wovosoft/wovoui";
import {ref} from "vue";

const text1 = ref('')
</script>
```

## Input Type

`Input` defaults to a text input, but you can set the type prop to one of the supported native
browser HTML5 types:
<template v-for="(c,i) in types">
<code>{{ c }}</code> {{ i + 1 < types.length ? ', ' : '.' }}
</template>

<div class="border p-2 mt-5">
    <WRow v-for="t in types" class="mb-1">
        <WCol md="4">Type <code>{{ t }}</code> :</WCol>
        <WCol md="8"><WInput :type="t"></WInput></WCol>
    </WRow>
</div>

```vue
<div class="border p-2">
    <Row v-for="t in ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'range', 'color']" class="mb-1">
        <Col md="4">Type <code>{{ t }}</code> :</Col>
        <Col md="8">
            <Input :type="t"/>
        </Col>
    </Row>
</div>
```

##  Control sizing

Set heights using the `size` prop to `sm` or `lg` for small or large respectively.
To control width, place the input inside standard Bootstrap grid column.

<div class="border p-2">
    <WRow class="my-1">
        <WCol sm="2">
            <label for="input-small">Small:</label>
        </WCol>
        <WCol sm="10">
            <WInput id="input-small" size="sm" placeholder="Enter your name"></WInput>
        </WCol>
    </WRow>
    <WRow class="my-1">
        <WCol sm="2">
            <label for="input-default">Default:</label>
        </WCol>
        <WCol sm="10">
            <WInput id="input-default" placeholder="Enter your name"></WInput>
        </WCol>
    </WRow>
    <WRow class="my-1">
        <WCol sm="2">
            <label for="input-large">Large:</label>
        </WCol>
        <WCol sm="10">
            <WInput id="input-large" size="lg" placeholder="Enter your name"></WInput>
        </WCol>
    </WRow>
</div>

```vue
<div class="border p-2">
    <Row class="my-1">
        <Col sm="2">
            <label for="input-small">Small:</label>
        </Col>
        <Col sm="10">
            <Input id="input-small" size="sm" placeholder="Enter your name"></Input>
        </Col>
    </Row>

    <Row class="my-1">
        <Col sm="2">
            <label for="input-default">Default:</label>
        </Col>
        <Col sm="10">
            <Input id="input-default" placeholder="Enter your name"></Input>
        </Col>
    </Row>

    <Row class="my-1">
        <Col sm="2">
            <label for="input-large">Large:</label>
        </Col>
        <Col sm="10">
            <Input id="input-large" size="lg" placeholder="Enter your name"></Input>
        </Col>
    </Row>
</div>
```


<script setup>
import {ref} from "vue"; 

const text1=ref('');
const types=['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'range', 'color'];
</script>