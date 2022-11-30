# Form Select

Customize the native `<select>`'s with custom CSS that changes the element’s initial appearance.

## Default

<WSelect aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</WSelect>

```vue
<Select aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Select>
```

## Sizing

<WSelect class="mb-3" size="lg" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</WSelect>

<WSelect size="sm" aria-label=".form-select-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</WSelect>

```vue
<Select class="mb-3" size="lg" aria-label=".form-select-lg example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Select>

<Select size="sm" aria-label=".form-select-sm example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Select>
```

The `multiple` attribute is also supported:

<WSelect class="form-select" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</WSelect>

```vue
<Select multiple aria-label="multiple select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Select>
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

<WSelect aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</WSelect>

```vue
<Select aria-label="Disabled select example" disabled>
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Select>
```

## `options` prop

You can define `options` prop; array of options.

<WSelect :options="options"></WSelect>

<WTabs class="mt-3">
<WTab title="Markup">

```vue
<Select :options="options"></Select>
```
</WTab>
<WTab title="script">

```javascript
const options = [
    {value: null, text: 'Please select an option'},
    {value: 'a', text: 'This is First option'},
    {value: 'b', text: 'Selected Option'},
    {value: {C: '3PO'}, text: 'This is an option with object value'},
    {value: 'd', text: 'This one is disabled', disabled: true}
];
```

</WTab>
</WTabs>

##  `text` & `value` props

Each item of options should have properties `value` & `text`. Value of property can be any of type.


<script>
export default {
    data(){
        return{
            options:[
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ]
        }
    }
}
</script>