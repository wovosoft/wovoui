# Navbar

The component `<Navbar>` is a wrapper that positions branding, navigation, and other elements into a concise header.
It's easily extensible and thanks to the `<Collapse>` component, it can easily integrate responsive behaviors.

## Example

<WNavbar brand="Navbar Brand">
   <template #default="{collapsed}">
    <WCollapse is-nav :visible="collapsed">
            <WNav class="me-auto mb-2 mb-lg-0" navs>
                <WNavItem active>Home</WNavItem>
                <WNavItem>Link</WNavItem>
                <WNavItemDropdown text="Dropdown">
                    <WDropdownItem>Action</WDropdownItem>
                    <WDropdownItem>Another action</WDropdownItem>
                    <WDropdownItem>Something else here</WDropdownItem>
                </WNavItemDropdown>
                <WNavItem disabled>Disabled</WNavItem>
            </WNav>
            <form class="d-flex">
                <WInput class="me-2" type="search" placeholder="Search" aria-label="Search"></WInput>
                <WButton variant="success" outline type="submit">Search</WButton>
            </form>
        </WCollapse>
    </template>
</WNavbar>

```html

<Navbar brand="Navbar Brand">
    <template #default="{collapsed}">
        <Collapse is-nav :visible="collapsed">
            <Nav class="me-auto mb-2 mb-lg-0" navs>
                <NavItem active>Home</NavItem>
                <NavItem>Link</NavItem>
                <NavItemDropdown text="Dropdown">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                </NavItemDropdown>
                <NavItem disabled>Disabled</NavItem>
            </Nav>
            <form class="d-flex">
                <Input class="me-2" type="search" placeholder="Search" aria-label="Search"></Input>
                <Button variant="success" outline type="submit">Search</Button>
            </form>
        </Collapse>
    </template>
</Navbar>
```

## Brand

Use prop `brand` or slot `brand` to set brand for a `<Navbar>`.

Above Example uses `brand` prop. Now, check the below example which uses `brand` as slot. If both `prop` and `slot`
is used then `slot` will have higher priority.

<WNavbar>
    <template #brand>
        Navbar Brand
    </template>
   <template #default="{collapsed}">
    <WCollapse is-nav :visible="collapsed">
            <WNav class="me-auto mb-2 mb-lg-0" navs>
                <WNavItem active>Home</WNavItem>
                <WNavItem>Link</WNavItem>
                <WNavItemDropdown text="Dropdown">
                    <WDropdownItem>Action</WDropdownItem>
                    <WDropdownItem>Another action</WDropdownItem>
                    <WDropdownItem>Something else here</WDropdownItem>
                </WNavItemDropdown>
                <WNavItem disabled>Disabled</WNavItem>
            </WNav>
            <form class="d-flex">
                <WInput class="me-2" type="search" placeholder="Search" aria-label="Search"></WInput>
                <WButton variant="success" outline type="submit">Search</WButton>
            </form>
        </WCollapse>
    </template>
</WNavbar>

```html

<Navbar>
    <template #brand>
        Navbar Brand
    </template>
    <template #default="{collapsed}">
        <Collapse is-nav :visible="collapsed">
            <Nav class="me-auto mb-2 mb-lg-0" navs>
                <NavItem active>Home</NavItem>
                <NavItem>Link</NavItem>
                <NavItemDropdown text="Dropdown">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                </NavItemDropdown>
                <NavItem disabled>Disabled</NavItem>
            </Nav>
            <form class="d-flex">
                <Input class="me-2" type="search" placeholder="Search" aria-label="Search"></Input>
                <Button variant="success" outline type="submit">Search</Button>
            </form>
        </Collapse>
    </template>
</Navbar>
```

## Brand URL

Use prop `brand-url` to set `URL` for `<Navbar>`'s brand.

```html

<Navbar brand="Navbar Brand" brand-url="https://wovosoft.com">
    <template #default="{collapsed}">
        <Collapse is-nav :visible="collapsed">
            <Nav class="me-auto mb-2 mb-lg-0" navs>
                <NavItem active>Home</NavItem>
                <NavItem>Link</NavItem>
                <NavItemDropdown text="Dropdown">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                </NavItemDropdown>
                <NavItem disabled>Disabled</NavItem>
            </Nav>
            <form class="d-flex">
                <Input class="me-2" type="search" placeholder="Search" aria-label="Search"></Input>
                <Button variant="success" outline type="submit">Search</Button>
            </form>
        </Collapse>
    </template>
</Navbar>
```

## Navbar Toggler

By Default, Navbar toggler is enabled. It shows on smaller screens. If you do not need it, then set `toggle-enabled`
to `false`.

## Navbar Nav

You can use `<NavbarNav>` or `<Nav>` both components. `<NavbarNav>` is just a wrapper of `<Nav>` component. Internally,
it adds `navs` prop to `<Nav>` component. So, if you are already using `<Nav>` component in a certain component, just
add `navs` prop.

## Color schemes

There are two props `variant` & `bg-variant`. `variant` prop is used to make the color lighter or darker. `bg-variant`
is used to make different background colors.

### Dark Variants

<WNavbar class="mb-2" :bg-variant="variant" variant="dark"
v-for="variant in ['primary' , 'secondary' , 'success' , 'danger' , 'warning', 'info', 'light', 'dark']"
:brand="variant +' Navbar'">
<WNav class="me-auto mb-2 mb-lg-0" navs>
<WNavItem active>Home</WNavItem>
<WNavItem>Link</WNavItem>
<WNavItem disabled>Disabled</WNavItem>
</WNav>
</WNavbar>

### Light Variants

<WNavbar class="mb-2" :bg-variant="variant" variant="light"
v-for="variant in ['primary' , 'secondary' , 'success' , 'danger' , 'warning', 'info', 'light', 'dark']"
:brand="variant +' Navbar'">
<WNav class="me-auto mb-2 mb-lg-0" navs>
<WNavItem active>Home</WNavItem>
<WNavItem>Link</WNavItem>
<WNavItem disabled>Disabled</WNavItem>
</WNav>
</WNavbar>

## Position

Use either `top` or `bottom` for `fixed` prop to make a `<Navbar>` be fixed either at `top` or `bottom` respectively.

```html

<Navbar fixed="top" brand="Fixed Top">
    <Nav class="me-auto mb-2 mb-lg-0" navs>
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </Nav>
</Navbar>
```

```html

<Navbar fixed="bottom" brand="Fixed Bottom">
    <Nav class="me-auto mb-2 mb-lg-0" navs>
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </Nav>
</Navbar>
```

## Sticky Navbar

```html

<Navbar sticky="top" brand="Sticky Top">
    <Nav class="me-auto mb-2 mb-lg-0" navs>
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </Nav>
</Navbar>
```

```html

<Navbar sticky="bottom" brand="Sticky Bottom">
    <Nav class="me-auto mb-2 mb-lg-0" navs>
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </Nav>
</Navbar>
```

## Scrolling

`<NavbarNav>` can be scrollable when `scroll-height` prop is set. You can use either `numerical` value without units,
or `string` value with units. When `numerical` value is used, default unit will be `px`.

```html

<Navbar sticky="bottom" brand="Sticky Bottom">
    <NavbarNav class="me-auto mb-2 mb-lg-0" navs :scroll-height="200">
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </NavbarNav>
</Navbar>
```

## Responsive behaviors

Set value for `expands-on` to add expanding breakpoint. Valid values are `{sm|md|lg|xl|xxl}`

```html

<Navbar expands-on="xl" brand="Sticky Bottom">
    <NavbarNav class="me-auto mb-2 mb-lg-0" navs :scroll-height="200">
        <NavItem active>Home</NavItem>
        <NavItem>Link</NavItem>
        <NavItem disabled>Disabled</NavItem>
    </NavbarNav>
</Navbar>
```