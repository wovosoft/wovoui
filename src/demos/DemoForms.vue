<template>
  <h2>Form Controls</h2>
  <Input placeholder="Default Input" v-model="value"/>
  {{ value }}
  <br>
  <Input size="sm" placeholder="Small Input"/>
  <br>
  <Input size="lg" placeholder="Large Input"/>
  <br>
  <Input size="lg" plain readonly value="Plain Text" placeholder="Large Input Plain Text Readonly"/>
  <br>
  <Input :state="true" placeholder="Valid Input"/>
  <br>
  <Input :state="false" placeholder="Invalid Input"/>
  <br>
  <Input type="color" placeholder="Invalid Input"/>
  <h2>Radios</h2>
  <Radio name="bal">Hello 1</Radio>
  <Radio name="bal">Hello 2</Radio>
  <h2>Check Boxes</h2>
  <Checkbox v-model="checked">Hello {{ checked ? 'YES' : 'NO' }}</Checkbox>
  <Checkbox v-model="unchecked">Hello {{ unchecked ? 'YES' : 'NO' }}</Checkbox>
  <Checkbox v-model="unchecked" disabled>Hello Disabled {{ unchecked ? 'YES' : 'NO' }}</Checkbox>
  <h2>Check Boxe Switches</h2>
  <Checkbox v-model="checked" switch>Hello {{ checked ? 'YES' : 'NO' }}</Checkbox>
  <Checkbox v-model="unchecked" switch>Hello {{ unchecked ? 'YES' : 'NO' }}</Checkbox>
  <h2>Grouped Checkbox</h2>
  <CheckboxGroup v-model="groupCheckboxModel" :options="groupCheckbox"/>
  <h2>Inline Checkbox</h2>
  <CheckboxGroup inline v-model="groupCheckboxModel" :options="groupCheckbox"/>
  <h2>Inline Switch Checkbox</h2>
  <CheckboxGroup inline switch v-model="groupCheckboxModel" :options="groupCheckbox"/>
  {{ groupCheckboxModel }}
  <h2>Select</h2>
  <Select>
    <option>Hi</option>
    <option>Hi</option>
    <option>Hi</option>
  </Select>
  <h2>Select Large</h2>
  <Select size="lg">
    <option>Hi</option>
    <option>Hi</option>
    <option>Hi</option>
  </Select>
  <h2>Select Small</h2>
  <Select size="sm">
    <option>Hi</option>
    <option>Hi</option>
    <option>Hi</option>
  </Select>
  <h2>Select with Options</h2>
  <Select
      value-field="value"
      text-field="text"
      v-model="selectValue"
      disabled-field="disabled"
      :options="[
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]">
  </Select>
  {{ selectValue }}
  <h2>Input Type Range</h2>
  <Range v-model="rangeValue" :min="-5" :max="5"></Range>
  {{ rangeValue }}
  <h2>Input Group</h2>
  <InputGroup>
    <Input placeholder="Your Name"/>
    <Input placeholder="Father's Name"/>
  </InputGroup>
  <h2>Input Group with check/radio</h2>
  <InputGroup class="mb-3">
    <InputGroupText>
      <Checkbox value="" aria-label="Checkbox for following text input"/>
    </InputGroupText>
    <input type="text" class="form-control" aria-label="Text input with checkbox">
  </InputGroup>
  <h2>Form Group</h2>
  <FormGroup label="Hello">
    <Input/>
  </FormGroup>
  <h2>Form Group: Floating Label</h2>
  <FormGroup label="Comments" floating labelFor="floating_el">
    <Input v-model="comment" placeholder="Leave a comment here" id="floating_el"></Input>
  </FormGroup>
  <div class="form-floating">
    <Textarea v-model="comment" placeholder="Leave a comment here" id="floatingTextarea"></Textarea>
    <label for="floatingTextarea" class="form-label">Comments</label>
  </div>
  <h2>Horizontal Form Group</h2>
  <FormGroup horizontal class="mb-3" label="Email" :label-sm="2" :content-sm="10">
    <Input placeholder="Name"/>
  </FormGroup>
  <div class="row mb-3">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
</template>

<script setup>
import Input from "../components/Input.vue";
import {ref} from "vue";
import Radio from "../components/Radio.vue";
import Checkbox from "../components/Checkbox.vue";
import CheckboxGroup from "../components/CheckboxGroup.vue";
import Select from "../components/Select.vue";
import Range from "../components/Range.vue";
import InputGroup from "../components/InputGroup.vue";
import InputGroupText from "../components/InputGroupText.vue";
import FormGroup from "../components/FormGroup.vue";

const value = ref("");
const checked = ref(true)
const unchecked = ref(false)
const groupCheckbox = ref(["one", "two", "three"]);
const groupCheckboxModel = ref(["one"]);
const selectValue = ref(null);
const rangeValue = ref(0);
const comment = ref(null);
</script>
<script>
import Textarea from "../components/Textarea.vue";
export default {
  components: {Textarea}
}
</script>