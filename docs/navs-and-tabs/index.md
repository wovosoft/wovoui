# Navs and tabs

## Base nav

Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled
states. Swap modifier classes to switch between each style.

The base .nav component is built with flexbox and provide a strong foundation for building all types of navigation
components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic
disabled styling.

<div class="border">
<WNav>
  <WNavItem active>
    Active
  </WNavItem>
  <WNavItem>
    Link
  </WNavItem>
  <WNavItem>
    Link
  </WNavItem>
  <WNavItem disabled>
    Disabled
  </WNavItem>
</WNav>
</div>

```html

<div class="border">
    <Nav>
        <NavItem active>
            Active
        </NavItem>
        <NavItem>
            Link
        </NavItem>
        <NavItem>
            Link
        </NavItem>
        <NavItem disabled>
            Disabled
        </NavItem>
    </Nav>
</div>
```

## Horizontal alignment

Change the horizontal alignment of your nav
with [flexbox utilities](https://getbootstrap.com/docs/5.1/layout/grid/#horizontal-alignment). By default, navs are
left-aligned, but you can easily change them to center or right aligned.

### Center Alignment

<WNav align="center">
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>

```html

<Nav align="center">
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

### Right Alignment

<WNav align="right">
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>

```html

<Nav align="right">
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

##  Vertical

Set prop `vertical` to `true` to make the `<Nav>` vertical.

<div class="border mt-3">
<WNav vertical>
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>
</div>

```html

<Nav vertical>
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

## Tabs Menu

Set prop `tabs` to `true` to make Tabs Menu.

<WNav tabs>
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>

```html

<Nav tabs>
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

##  Pills

Take that same HTML, but use `pills` prop instead:

<WNav pills>
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>

```html

<Nav pills>
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

##  Fill and justify

<WNav pills fill>
    <WNavItem active>
        Active
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem>
        Link
    </WNavItem>
    <WNavItem disabled>
        Disabled
    </WNavItem>
</WNav>

```html

<Nav pills fill>
    <NavItem active>
        Active
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem>
        Link
    </NavItem>
    <NavItem disabled>
        Disabled
    </NavItem>
</Nav>
```

## Justified

Use prop `justified` to make equal width nav items.