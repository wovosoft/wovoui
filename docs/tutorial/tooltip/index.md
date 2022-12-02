# Tooltip

Tooltips are replacement of `title` attributes.

### `target` 

`<Tooltip>` component should have `target` property. `target` prop's value should be the `id` of the
element on which the `tooltip` should be shown.

<WButton id="one">Show Tooltip on Hover</WButton>

<WTooltip target="one">
<em>Tooltip</em> <u>with</u> <b>HTML</b>
</WTooltip>

```html

<Button id="one">Show Tooltip on Hover</Button>
<Tooltip target="one">
    <em>Tooltip</em> <u>with</u> <b>HTML</b>
</Tooltip>
```

##  Placement

`Tooltips` can be shown in four directions. Supported values are `top`, `right`, `bottom` and `left`.
These values can be set using `placement` prop.

<template v-for="dir in ['top','right','bottom','left']">
<WButton :id="dir" class="m-2">Show Tooltip on Hover</WButton>
<WTooltip :target="dir" :placement="dir">
<em>Tooltip</em> <u>with</u> <b>HTML</b>
</WTooltip>
</template>

```html

<template v-for="dir in ['top','right','bottom','left']">
    <Button :id="dir" class="m-2">Show Tooltip on Hover</Button>
    <Tooltip :target="dir" :placement="dir">
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
    </Tooltip>
</template>
```

## `content` prop

`<Tooltip>` components inner text can be set using `content` attribute too.

<WButton id="content">Show Tooltip on Hover</WButton>
<WTooltip placement="bottom" target="content" content="Hello Tooltip with content"/>

```html

<Button id="content">Show Tooltip on Hover</Button>
<Tooltip placement="bottom" target="content" content="Hello Tooltip with content"/>
```
