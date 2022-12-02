# Stacks

Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.

Stacks offer a shortcut for applying a number of flexbox properties to quickly and easily create layouts in Bootstrap.
All credit for the concept and implementation goes to the open source [Pylon project](https://almonk.github.io/pylon/).

## Horizontal

By, default `<Stack>`s are horizontal.

<WStack>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</WStack>

```html

<Stack>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</Stack>
```

## Vertical

To make `vertical` stacks, set `vertical` prop's value to `true`.

<WStack vertical>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</WStack>

```html

<Stack vertical>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</Stack>
```

## Gap

To apply `gap` between stack elements, use `gap` property. Values should be numeric.

<WStack :gap="3" vertical>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</WStack>

```html

<Stack :gap="3" vertical>
    <div class="bg-light border">First item</div>
    <div class="bg-light border">Second item</div>
    <div class="bg-light border">Third item</div>
</Stack>
```