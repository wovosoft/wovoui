# Form

`wovoui's` form component and helper components that optionally support inline form styles and validation states. Pair
them up with other BootstrapVue form control components for an easy customized, and responsive, layout with a consistent
look and feel.

## Introduction to forms and controls

Be sure to use an appropriate type on all inputs (e.g., email for email address or number for numerical information) to
take advantage of newer input controls like email verification, number selection, and more.

Here's a quick example to demonstrate BootstrapVue's form styles. Keep reading for documentation on supported
components, form layout, and more.

<WCard header="Form Example">
<form>
    <WFormGroup label="Email">
        <WInput type="email" v-model="form1.email" placeholder="Email Address"></WInput>
    </WFormGroup>
    <WFormGroup label="Phone">
        <WInput type="tel" v-model="form1.phone" placeholder="Phone Number"></WInput>
    </WFormGroup>
    <WButton class="w-100 mt-3" variant="dark">SUBMIT</WButton>
</form>
</WCard>

<WCard header="Form Data Result" class="mt-3">
    <pre>{{JSON.parse(JSON.stringify(form1,null,'\n'))}}</pre>
</WCard>

```vue

<template>
    <Card header="Form Example">
        <form>
            <FormGroup label="Email">
                <Input type="email" v-model="form1.email" placeholder="Email Address"></Input>
            </FormGroup>
            <FormGroup label="Phone">
                <Input type="tel" v-model="form1.phone" placeholder="Phone Number"></Input>
            </FormGroup>
            <Button class="w-100 mt-3" variant="dark">SUBMIT</Button>
        </form>
    </Card>

    <Card header="Form Data Result">
        <pre>{{JSON.parse(JSON.stringify(form1,null,'\n'))}}</pre>
    </Card>
    
</template>
<script setup>
import {reactive} from "vue";

const form1 = reactive({
    email: "",
    phone: ""
});
</script>
```
<script setup>
import {reactive} from "vue";
const form1=reactive({
    email:"",
    phone:""
});
</script>