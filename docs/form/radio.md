# Form Radio

This component is used to create html `radio` elements with bootstrap styling and vue model bindings.

## Form Radio Inputs

<WFormGroup label="Individual radios">
    <WRadio v-model="selected" name="some-radios" value="A">Option A</WRadio>
    <WRadio v-model="selected" name="some-radios" value="B">Option B</WRadio>
</WFormGroup>

<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

```vue
<template>
    <div>
        <FormGroup label="Individual radios">
            <Radio v-model="selected" name="some-radios" value="A">Option A</Radio>
            <Radio v-model="selected" name="some-radios" value="B">Option B</Radio>
        </FormGroup>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
</template>

<script>
import {ref} from "vue";
import {Radio, FormGroup} from "@wovosoft/wovoui";

export default {
    components: {Radio, FormGroup},
    setup(props) {
        return {
            selected: ref('')
        }
    }
}
</script>
```

<script setup>
import {ref} from "vue"; 

const  selected= ref('');
</script>