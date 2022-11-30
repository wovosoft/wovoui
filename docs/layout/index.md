# Containers

Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device
or viewport.

## Default container

```html

<Container>
    <!-- Content here -->
</Container>
```

This produces following output

```html

<div class="container">
    <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after
which we apply max-widths for each of the higher breakpoints. For example, .container-sm is 100% wide to start until the
sm breakpoint is reached, where it will scale up with md, lg, xl, and xxl. This values can be set using `size` prop.

Supported values

```ts
type responsiveSizes = "sm" | "md" | "lg" | "xl" | "xxl";
```

Example

<WContainer size="sm">
     Inspect Me
</WContainer>

```html

<Container size="sm">
    <!-- Content here -->
</Container>
```

This will produce following output

```html

<div class="container-sm">
    <!-- Content here -->
</div>
```

## Fluid containers

Containers can be fluid be setting prop `fluid`

```html

<Container fluid>
    <!-- Content here -->
</Container>
```
