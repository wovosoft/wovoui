# Form Checkbox

For cross browser consistency, `<CheckboxGroup>` and `<Checkbox>` use wovoui's custom checkbox input to replace the
browser default checkbox input. It is built on top of semantic and accessible markup, so it is a solid replacement for
the default checkbox input.

<div class="bootstrap">
    <WCheckbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted">
      I accept the terms and use
    </WCheckbox>
    <div>State: <strong>{{ status }}</strong></div>
</div>

```vue

<template>
    <div>
        <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted">
            I accept the terms and use
        </b-form-checkbox>

        <div>State: <strong>{{ status }}</strong></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: 'not_accepted'
        }
    }
}
</script>
```

## Control sizing

Use the `size` prop to control the size of the checkbox. The default size is medium. Supported size values are `sm` (
small)
and `lg` (large).

<div class="bootstrap">
  <WCheckbox size="sm">Small</WCheckbox>
  <WCheckbox>Default</WCheckbox>
  <WCheckbox size="lg">Large</WCheckbox>
</div>

```vue

<Checkbox size="sm">Small</Checkbox>
<Checkbox>Default</Checkbox>
<Checkbox size="lg">Large</Checkbox>
```

Sizes can be set on individual `<Checkbox>` components, or inherited from the size setting of 
`<CheckboxGroup>`.


<script setup>
import {ref} from "vue"; 

const status=ref('not_accepted');
</script>