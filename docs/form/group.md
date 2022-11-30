# Form Group

Bootstrap 5 actually doesn't have `form group` component. But to keep backward compatibility with previous Bootstrap
versions, we have decided to make this component. This component adds a custom `form-group` class and also adds
Bootstrap's utility class `mb-3` to keep a separation between two vertically adjacent form groups.

The custom `form-group` class doesn't have any default styling. It is just added to make it more semantic. You can use
this class to apply styles to the component itself.

<WFormGroup>
    <WFormLabel>Name</WFormLabel>
    <WInput type="text" placeholder="User Name"></WInput>
</WFormGroup>
<WFormGroup>
    <WFormLabel>Email</WFormLabel>
    <WInput type="email" placeholder="User Email"></WInput>
</WFormGroup>

```vue

<FormGroup>
<FormLabel>Name</FormLabel>
<Input type="text" placeholder="User Name"></Input>
</FormGroup>
<FormGroup>
<FormLabel>Email</FormLabel>
<Input type="email" placeholder="User Email"></Input>
</FormGroup>
```

## `label` prop

`<FormLabel>` component can be used to make forms `label` in Bootstrap 5 styling. You can also use `label` prop to
the `<FormGroup>` component. Output of the both is same. Example form `<FormLabel>` is the above one. Example
for `label`
prop is the below one:

```vue

<FormGroup label="Name">
<Input type="text" placeholder="User Name"></Input>
</FormGroup>
<FormGroup label="Email">
<Input type="email" placeholder="User Email"></Input>
</FormGroup>
```

## `label` slot

You can use `label` slot too, to make form group's label. When You are using `label` slot, any HTML markup can be used.

```vue

<FormGroup>
<template #label>
    Name
</template>
<Input type="text" placeholder="User Name"></Input>
</FormGroup>
<FormGroup>
<template #label>
    Email
</template>
<Input type="email" placeholder="User Email"></Input>
</FormGroup>
```

## Horizontal layout

By default, the label appears above the input element(s), but you may optionally render horizontal (label to the left of
the input) at the various standard Bootstrap breakpoints.

The props `label-cols` and `label-cols-{breakpoint}` allow you to specify how many columns the label should occupy in the
row. The input will fill the rest of the row width. The value must be a number greater than 0. Or you can set the prop
to true to make the label and input(s) each occupy half of the width of the rendered row (handy if you have custom
Bootstrap with an odd number of columns), or set the value to 'auto' so that the label occupies only the width that is
needed.

