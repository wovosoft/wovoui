# Gutters

Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.

## Horizontal gutters

To apply horizontal gutters, use prop `gx`.

<WContainer class="px-4">
    <WRow :gx="5">
        <WCol>
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol>
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
    </WRow>
</WContainer>

```html

<Container class=" px-4">
    <Row :gx="5">
        <Col>
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col>
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
    </Row>
</Container>
```

## Vertical gutters

Use prop `gy` to set vertical gutters between columns.

<WContainer class="overflow-hidden">
    <WRow :gy="5">
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
    </WRow>
</WContainer>

```html

<Container class="overflow-hidden">
    <Row :gy="5">
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
    </Row>
</Container>
```

## Horizontal & vertical gutters

Use prop `g` on `Row`s.

<WContainer>
    <WRow :g="2">
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
        <WCol :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </WCol>
    </WRow>
</WContainer>

```html

<Container>
    <Row :g="2">
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
        <Col :col="6">
        <div class="p-3 border bg-light">Custom column padding</div>
        </Col>
    </Row>
</Container>
```