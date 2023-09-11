# Buttons
Use `Bootstrap's` custom `Button` component for actions in forms, dialogs, and more.
Includes support for a handful of contextual variations, sizes, states, and more.

## Overview

`<Button>` component generates either a native`button` element, `a` element,
or `router-link` component with the styling of a button.

<<< @/../samples/buttons/ExOverview.vue

<Sample><ExOverview/></Sample>

##  Element type

The `Button` component generally renders a `button` element. However, you can also render an `a`
element by providing an `href` prop value. You may also generate vue-router
`router-link` when providing a value for the to prop (vue-router is required).

## Type

You can specify the button's type by setting the prop type to `'button'`,
`'submit'` or `'reset'`.
The default type is <code>'button'</code>.

Note the type prop has no effect when either href or to props are set.


## Sizing

Fancy larger or smaller buttons? Specify `lg` or `sm` via the `size` prop.

<<< @/../samples/buttons/ExSizing.vue

<Sample><ExSizing/></Sample>

## Contextual Variants

Use the variant prop to generate the various Bootstrap contextual button variants.
By default, <code>&lt;Button&gt;</code> will render with the secondary variant.
The variant prop adds the Bootstrap v5 class .btn-<code>variant</code> on the rendered button.

## Solid color variants

`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` , `dark`

<<< @/../samples/buttons/ExContextualVariants.vue

<Sample><ExContextualVariants/></Sample>

##  Outline color variants

Use Property `outline` to apply outlined color variants.

<<< @/../samples/buttons/ExOutlineVariants.vue

<Sample><ExOutlineVariants/></Sample>

##  Block level buttons

Block Level button is a full width button of its container. Use prop `block` to make a block/full width button.

<<< @/../samples/buttons/ExBlockLevelVariants.vue

<Sample><ExBlockLevelVariants/></Sample>

##  Pill style

Prefer buttons with a more rounded-pill style? Just set the prop pill to `true`.

<<< @/../samples/buttons/ExPills.vue

<Sample><ExPills/></Sample>

##  Squared style

Prefer buttons with a more square corner style? Just set the prop squared to `true`.

<<< @/../samples/buttons/ExSquared.vue

<Sample><ExSquared/></Sample>

##  Disabled state

Set the `disabled` prop to `disabled` button default functionality. disabled also works with
buttons rendered as `a` elements and `router-link (i.e. with the href or to prop set).

The pressed prop can be set to one of three values:

- <code>true</code>: Sets the .active class and adds the attribute <code>aria-pressed="true"</code>.
- <code>false</code>: Clears the .active class and adds the attribute <code>aria-pressed="false"</code>.
- <code>null</code>: (default) Neither the class .active nor the attribute <code>aria-pressed</code> will be
  set.

##  Buttons with Badges

Use prop `badge` to set button badges

<<< @/../samples/buttons/ExBadges.vue

<Sample><ExBadges/></Sample>

##  Component reference

[//]: # (<ComponentReference/>)


<script lang="ts" setup>

// import ExBadges from "../../../samples/buttons/ExBadges.vue";

// import ExBlockLevelVariants from "../../../samples/buttons/ExBlockLevelVariants.vue";
//
// import ExContextualVariants from "../../../samples/buttons/ExContextualVariants.vue";
//
// import ExOutlineVariants from "../../../samples/buttons/ExOutlineVariants.vue";
//
// import ExOverview from "../../../samples/buttons/ExOverview.vue";
//
// import ExPills from "../../../samples/buttons/ExPills.vue";
//
// import ExSizing from "../../../samples/buttons/ExSizing.vue";
//
// import ExSquared from "../../../samples/buttons/ExSquared.vue";
//
// import ComponentReference from "../../../samples/buttons/ComponentReference.vue";

</script>


<style>

.child-m-2  button {

    margin: 2px !important;

}

</style>