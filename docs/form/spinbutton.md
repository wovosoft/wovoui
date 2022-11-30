# Spin Button

Spin buttons are a `wovoui`'s custom numerical range form control. Spin buttons allow for incrementing or decrementing a
numerical value within a range of a minimum and maximum number, with optional step value.

## Overview

The component `<SpinButton>` is WAI-ARIA compliant, allowing for keyboard control, and supports both horizontal (
default) and vertical layout.

<WSpinButton></WSpinButton>

```vue

<SpinButton></SpinButton>
```

## `v-model` value

The `v-model` always returns the value as a number. The `v-model` can be `null` if no `initial` value is set.

## `min`, `max`, and `step`

Spinbuttons have a default range from 1 to 100, which can be changed by setting the `min` and `max` props. The
default `step`
increment is 1, and can be changed via the `step` prop (decimal values allowed).

When `step` is set, the value will always be a multiple of the step size plus the minimum value.

<WSpinButton :step="0.25"></WSpinButton>

```vue

<SpinButton :step="0.25"></SpinButton>
```

## Size

As with other form controls, `<SpinButton>` supports `small` and `large` sizing via setting the `size` prop to either
`sm` or `lg`, respectively.

<div>
    <label for="sb-small">Spin button - Small size</label>
    <WSpinButton id="sb-small" size="sm" placeholder="--" class="mb-2"></WSpinButton>
    <label for="sb-default">Spin button - Default size</label>
    <WSpinButton id="sb-default" placeholder="--" class="mb-2"></WSpinButton>
    <label for="sb-large">Spin button - Large size</label>
    <WSpinButton id="sb-large" size="lg" placeholder="--" class="mb-2"></WSpinButton>
</div>

```vue

<div>
<label for="sb-small">Spin button - Small size</label>
<SpinButton id="sb-small" size="sm" placeholder="--" class="mb-2"></SpinButton>

<label for="sb-default">Spin button - Default size</label>
<SpinButton id="sb-default" placeholder="--" class="mb-2"></SpinButton>

<label for="sb-large">Spin button - Large size</label>
<SpinButton id="sb-large" size="lg" placeholder="--" class="mb-2"></SpinButton>
</div>
```

##  Inline

<div>
<label for="sb-inline">Inline spin button</label>
<WSpinButton id="sb-inline" inline></WSpinButton>
</div>