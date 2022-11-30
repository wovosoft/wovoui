# Popovers
Popovers are small tooltip which shows over certain elements. These are actually replacements of `title`.

## Example
<WButton id="one">Toggle Popover</WButton>
<WPopover target="one">
Hello Popover!
</WPopover>

```html

<Button id="one">Toggle Popover</Button>
<Popover target="one">
    Hello Popover!
</Popover>
```

## Four directions

Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using Bootstrap in RTL.

<WButton variant="secondary" class="me-2" :id="d+'_direction'" v-for="d in ['top','right','bottom','left']">
  Popover on {{d}}
</WButton>
<WPopover :target="d+'_direction'" :placement="d" v-for="d in ['top','right','bottom','left']">
    Popover Content of <code>{{d}}</code>
</WPopover>

```html
<Button variant="secondary" class="me-2" :id="d+'_direction'" v-for="d in ['top','right','bottom','left']">
  Popover on {{d}}
</Button>
<Popover :target="d+'_direction'" :placement="d" v-for="d in ['top','right','bottom','left']">
    Popover Content of <code>{{d}}</code>
</Popover>
```

##  Popover Header

<WButton id="popoverheader">Toggle Popover</WButton>
<WPopover target="popoverheader" header="Popover Header">
Hello Popover!
</WPopover>

```html

<Button id="popoverheader">Toggle Popover</Button>
<Popover target="popoverheader" header="Popover Header">
    Hello Popover!
</Popover>
```
