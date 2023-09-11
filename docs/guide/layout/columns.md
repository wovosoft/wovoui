# Columns

Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid
system. Plus, see how to use column classes to manage widths of non-grid elements.

## Alignment

### Vertical alignment

Use prop `align-items` on `Row` component to vertically align `Cols`.

<WContainer class="child-col-border">
    <WRow align-items="start" style="min-height: 10rem;" class="border">
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
    </WRow>
    <WRow align-items="center" style="min-height: 10rem;" class="border">
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
    </WRow>
    <WRow align-items="end" style="min-height: 10rem;" class="border">
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
        <WCol>
        One of three columns
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row align-items="start" style="min-height: 10rem;" class="border">
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
    </Row>
    <Row align-items="center" style="min-height: 10rem;" class="border">
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
    </Row>
    <Row align-items="end" style="min-height: 10rem;" class="border">
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
        <Col>
        One of three columns
        </Col>
    </Row>
</Container>
```

Cols can be aligned by using `align-self` prop. Supported values are

```ts
type colAlignments = 'start' | 'center' | 'end';
```

<WContainer class="child-col-border border">
    <WRow style="min-height: 10rem;">
        <WCol align-self="start">
            One of three columns
        </WCol>
        <WCol align-self="center">
            One of three columns
        </WCol>
        <WCol align-self="end">
            One of three columns
        </WCol>
    </WRow>
</WContainer>

```html

<Container class="child-col-border">
    <Row style="min-height: 10rem;">
        <Col align-self="start">
        One of three columns
        </Col>
        <Col align-self="center">
        One of three columns
        </Col>
        <Col align-self="end">
        One of three columns
        </Col>
    </Row>
</Container>
```

## Horizontal alignment

Use prop `justify-content`

Supported values

```ts
type alignments = 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
```

<WContainer class="child-col-border border">
    <WRow justify-content="start">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
    <WRow justify-content="center">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
    <WRow justify-content="end">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
    <WRow justify-content="around">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
    <WRow justify-content="between">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
    <WRow justify-content="evenly">
        <WCol :col="4">
            One of two columns
        </WCol>
        <WCol :col="4">
            One of two columns
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row justify-content="start">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
    <Row justify-content="center">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
    <Row justify-content="end">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
    <Row justify-content="around">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
    <Row justify-content="between">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
    <Row justify-content="evenly">
        <Col :col="4">
        One of two columns
        </Col>
        <Col :col="4">
        One of two columns
        </Col>
    </Row>
</Container>
```

## Reordering

Use prop `order` to reorder columns.

<WContainer class="child-col-border">
    <WRow>
        <WCol>
        First in DOM, no order applied
        </WCol>
        <WCol :order="5">
        Second in DOM, with a larger order
        </WCol>
        <WCol :order="1">
        Third in DOM, with an order of 1
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col>
        First in DOM, no order applied
        </Col>
        <Col :order="5">
        Second in DOM, with a larger order
        </Col>
        <Col :order="1">
        Third in DOM, with an order of 1
        </Col>
    </Row>
</Container>
```

`order`'s value can be also `first` and `last` which generates bootstrap's responsive `order-first` and `order-last`
classes respectively.

<WContainer class="child-col-border">
    <WRow>
        <WCol order="last">
            First in DOM, ordered last
        </WCol>
        <WCol>
            Second in DOM, unordered
        </WCol>
        <WCol order="first">
            Third in DOM, ordered first
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col order="last">
        First in DOM, ordered last
        </Col>
        <Col>
        Second in DOM, unordered
        </Col>
        <Col order="first">
        Third in DOM, ordered first
        </Col>
    </Row>
</Container>
```

## Offsetting columns

Use `offset` and `offset-{responsive-breakpoints}` prop to set `offset` utility classes.

<WContainer class="child-col-border">
    <WRow>
        <WCol :md="4">
        :md="4"
        </WCol>
        <WCol :md="4" offset-md="4">
        :md="4" offset-md="4"
        </WCol>
    </WRow>
    <WRow>
        <WCol :md="4" :offset-md="4">
        :md="4" :offset-md="4"
        </WCol>
        <WCol :md="3" :offset-md="3">
        :md="3" :offset-md="3"
        </WCol>
    </WRow>
    <Row>
        <WCol :md="6" :offset-md="3">
        :md="6" :offset-md="3"
        </WCol>
    </Row>
</WContainer>

```html

<Container>
    <Row>
        <Col :md="4">
        :md="4"
        </Col>
        <Col :md="4" offset-md="4">
        :md="4" offset-md="4"
        </Col>
    </Row>
    <Row>
        <Col :md="4" :offset-md="4">
        :md="4" :offset-md="4"
        </Col>
        <Col :md="3" :offset-md="3">
        :md="3" :offset-md="3"
        </Col>
    </Row>
    <Row>
        <Col :md="6" :offset-md="3">
        :md="6" :offset-md="3"
        </Col>
    </Row>
</Container>
```

<style scoped>
.child-col-border [class^="col"]{
border: 1px solid lightgray;
padding: 5px;
}
</style>