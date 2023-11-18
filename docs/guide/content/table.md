# Tables

Use same semantic table elements of HTML5 to make table. Just the difference is, in this case first character of name
syllable should be uppercase.

<WTable>
    <WTHead>
    <WTr>
        <WTh scope="col">#</WTh>
        <WTh scope="col">First</WTh>
        <WTh scope="col">Last</WTh>
        <WTh scope="col">Handle</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr>
        <WTh scope="row">1</WTh>
        <WTd>Mark</WTd>
        <WTd>Otto</WTd>
        <WTd>@mdo</WTd>
    </WTr>
    <WTr>
        <WTh scope="row">2</WTh>
        <WTd>Jacob</WTd>
        <WTd>Thornton</WTd>
        <WTd>@fat</WTd>
    </WTr>
    <WTr>
        <WTh scope="row">3</WTh>
        <WTd colspan="2">Larry the Bird</WTd>
        <WTd>@twitter</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table class="table">
    <THead>
    <Tr>
        <Th scope="col">#</Th>
        <Th scope="col">First</Th>
        <Th scope="col">Last</Th>
        <Th scope="col">Handle</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr>
        <Th scope="row">1</Th>
        <Td>Mark</Td>
        <Td>Otto</Td>
        <Td>@mdo</Td>
    </Tr>
    <Tr>
        <Th scope="row">2</Th>
        <Td>Jacob</Td>
        <Td>Thornton</Td>
        <Td>@fat</Td>
    </Tr>
    <Tr>
        <Th scope="row">3</Th>
        <Td colspan="2">Larry the Bird</Td>
        <Td>@twitter</Td>
    </Tr>
    </TBody>
</Table>
```

## Variants

Use prop `variant` to color tables, table rows or individual cells. Supported values:

```ts
type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
```

<WTable>
    <WTHead>
        <WTh>Variant</WTh>
        <WTh>Cell</WTh>
        <WTh>Cell</WTh>
    </WTHead>
    <WTBody>
    <WTr :variant="v" v-for="v in ['primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark']">
        <WTd>{{v}}</WTd>
        <WTd>Cell</WTd>
        <WTd>Cell</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table>
    <THead>
    <Th>Variant</Th>
    <Th>Cell</Th>
    <Th>Cell</Th>
    </THead>
    <TBody>
    <Tr :variant="v"
        v-for="v in ['primary' , 'secondary' , 'success' , 'danger' , 'warning' , 'info' , 'light' , 'dark']">
        <Td>{{v}}</Td>
        <Td>Cell</Td>
        <Td>Cell</Td>
    </Tr>
    </TBody>
</Table>
```

## Striped rows

Use prop `striped` to true, to make striped tables.

<WTable striped>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table striped>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

At the same time `variant`s can be used too.

<WTable striped variant="dark">
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table striped variant="dark">
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

## Hoverable rows

Use prop `hover` to make table rows hoverable.

<WTable hover>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table hover>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

These hoverable rows can also be combined with the striped variant:

<WTable hover striped>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table hover striped>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

## Active tables

Highlight a table row or cell by adding `active` prop.

<WTable>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 5" :active="i==3">
        <WTd>{{i}}</WTd>
        <WTd :active="i===5 || i===1">{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 5" :active="i==3">
        <Td>{{i}}</Td>
        <Td :active="i===5 || i===1">{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

## Bordered tables

Use prop `bordered`

<WTable bordered>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table bordered>
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

## Border Variant

Use prop `border-variant` to apply border color variants.

<WTable bordered border-variant="primary">
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table bordered border-variant="primary">
    <THead>
    <Tr>
        <Th>One</Th>
        <Th>Two</Th>
        <Th>Three</Th>
    </Tr>
    </THead>
    <TBody>
    <Tr v-for="i in 3">
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
        <Td>{{i}}</Td>
    </Tr>
    </TBody>
</Table>
```

## Tables without borders

Use prop `borderless`

<WTable borderless>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table borderless>
    ........
</Table>
```

## Small tables

Use prop `small`

<WTable small>
    <WTHead>
    <WTr>
        <WTh>One</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table small>
    ........
</Table>
```

## Vertical alignment

Use prop `valign` with values `'middle' | 'bottom' | 'top'`

## Responsive Table

Use prop `responsive` to make Responsive Table

Supported values:

```ts
type sizes = "sm" | "md" | "lg" | "xl" | "xxl" | true | false;
```

<WTable v-for="s in ['sm' , 'md' , 'lg' , 'xl' , 'xxl', true]" :responsive="s">
    <WTHead>
    <WTr>
        <WTh>Responsive on {{s==true?'all breakpoints':s+' breakpoints'}}</WTh>
        <WTh>Two</WTh>
        <WTh>Three</WTh>
    </WTr>
    </WTHead>
    <WTBody>
    <WTr v-for="i in 3">
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
        <WTd>{{i}}</WTd>
    </WTr>
    </WTBody>
</WTable>

```html

<Table v-for="s in ['sm' , 'md' , 'lg' , 'xl' , 'xxl', true]" :responsive="s">
    <THead>
        <Tr>
            <Th>Responsive on {{s==true?'all breakpoints':s+' breakpoints'}}</Th>
            <Th>Two</Th>
            <Th>Three</Th>
        </WTr>
    </THead>
    ........
</Table>
```