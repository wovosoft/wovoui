# Grid system

Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with
flexbox and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.

<WContainer>
    <WRow>
        <WCol class="border">Column</WCol>
        <WCol class="border">Column</WCol>
        <WCol class="border">Column</WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col class="border">
        Column
        </Col>
        <Col class="border">
        Column
        </Col>
        <Col class="border">
        Column
        </Col>
    </Row>
</Container>
```

## Grid options

Bootstrap’s grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default
grid tiers are as follow:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

## Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xxl`. Add any number of
unit-less classes for each breakpoint you need and every column will be the same width.

<WContainer>
    <WRow>
        <WCol class="border">
        1 of 2
        </WCol>
        <WCol class="border">
        2 of 2
        </WCol>
    </WRow>
    <WRow>
        <WCol class="border">
        1 of 3
        </WCol>
        <WCol class="border">
        2 of 3
        </WCol>
        <WCol class="border">
        3 of 3
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col class="border">
        1 of 2
        </Col>
        <Col class="border">
        2 of 2
        </Col>
    </Row>
    <Row>
        <Col class="border">
        1 of 3
        </Col>
        <Col class="border">
        2 of 3
        </Col>
        <Col class="border">
        3 of 3
        </Col>
    </Row>
</Container>
```

## Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns
automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths.
Note that the other columns will resize no matter the width of the center column.

<WContainer class="child-col-border">
    <WRow>
        <WCol>
        1 of 3
        </WCol>
        <WCol :col="6">
        2 of 3 (wider)
        </WCol>
        <WCol>
        3 of 3
        </WCol>
    </WRow>
    <WRow>
        <WCol>
        1 of 3
        </WCol>
        <WCol :col="5">
        2 of 3 (wider)
        </WCol>
        <WCol>
        3 of 3
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col>
        1 of 3
        </Col>
        <Col :col="6">
        2 of 3 (wider)
        </Col>
        <Col>
        3 of 3
        </Col>
    </Row>
    <Row>
        <Col>
        1 of 3
        </Col>
        <Col :col="5">
        2 of 3 (wider)
        </Col>
        <Col>
        3 of 3
        </Col>
    </Row>
</Container>
```

## Variable width content

Use `col="auto"`,`md="auto"` or `sm="auto"` etc. to size columns based on the natural width of their content.

<WContainer class="child-col-border">
    <WRow justify-content="md-center">
        <WCol :lg="2">
            1 of 3
        </WCol>
        <WCol md="auto">
            Variable width content
        </WCol>
        <WCol :lg="2">
            3 of 3
        </WCol>
    </WRow>
    <WRow>
        <WCol>
            1 of 3
        </WCol>
        <WCol md="auto">
            Variable width content
        </WCol>
        <WCol :lg="2">
            3 of 3
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row justify-content="md-center">
        <Col :lg="2">
        1 of 3
        </Col>
        <Col md="auto">
        Variable width content
        </Col>
        <Col :lg="2">
        3 of 3
        </Col>
    </Row>
    <Row>
        <Col>
        1 of 3
        </Col>
        <Col md="auto">
        Variable width content
        </Col>
        <Col :lg="2">
        3 of 3
        </Col>
    </Row>
</Container>
```

## Row columns

Rows have same features like Columns. So, col, md, sm, lg all these props can be used in same manner like cols.

<WContainer class="child-col-border">
    <WRow :cols="2">
        <WCol>
        Column
        </WCol>
        <WCol>
        Column
        </WCol>
        <WCol>
        Column
        </WCol>
        <WCol>
        Column
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row :cols="2">
        <Col>
        Column
        </Col>
        <Col>
        Column
        </Col>
        <Col>
        Column
        </Col>
        <Col>
        Column
        </Col>
    </Row>
</Container>
```

## Nesting

<WContainer class="child-col-border">
    <WRow>
        <WCol :sm="3">
                Level 1: .col-sm-3
            </WCol>
            <WCol :sm="9">
                <WRow>
                    <WCol :col="8" :sm="6">
                        Level 2: .col-8 .col-sm-6
                    </WCol>
                    <WCol :col="4" :sm="6">
                        Level 2: .col-4 .col-sm-6
                    </WCol>
                </WRow>
            </WCol>
        </WRow>
</WContainer>

```html

<Container>
    <Row>
        <Col :sm="3">
        Level 1: .col-sm-3
        </Col>
        <Col :sm="9">
        <Row>
            <Col :col="8" :sm="6">
            Level 2: .col-8 .col-sm-6
            </Col>
            <Col :col="4" :sm="6">
            Level 2: .col-4 .col-sm-6
            </Col>
        </Row>
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