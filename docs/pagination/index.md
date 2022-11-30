# Pagination

Quick first, previous, next, last, and page buttons for pagination control of another component

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while
providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of
available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other
assistive technologies.

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive
aria-label for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between
a set of search results, an appropriate label could be aria-label="Search results pages".

<nav aria-label="Page navigation example">
  <WPagination>
    <WPageItem>Previous</WPageItem>
    <WPageItem>1</WPageItem>
    <WPageItem>2</WPageItem>
    <WPageItem>3</WPageItem>
    <WPageItem>Next</WPageItem>
  </WPagination>
</nav>

```html

<nav aria-label="Page navigation example">
    <Pagination>
        <PageItem>Previous</PageItem>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>Next</PageItem>
    </Pagination>
</nav>
```

## Working with icons

<nav aria-label="Page navigation example">
  <WPagination class="pagination">
    <WPageItem>
        <span aria-hidden="true">&laquo;</span>
    </WPageItem>
    <WPageItem>1</WPageItem>
    <WPageItem>2</WPageItem>
    <WPageItem>3</WPageItem>
    <WPageItem>
        <span aria-hidden="true">&raquo;</span>
    </WPageItem>
  </WPagination>
</nav>

```html

<nav aria-label="Page navigation example">
    <Pagination class="pagination">
        <PageItem>
            <span aria-hidden="true">&laquo;</span>
        </PageItem>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>
            <span aria-hidden="true">&raquo;</span>
        </PageItem>
    </Pagination>
</nav>
```

## Disabled and active states

<nav aria-label="Page navigation example">
  <WPagination class="pagination">
    <WPageItem>
        <span aria-hidden="true">&laquo;</span>
    </WPageItem>
    <WPageItem>1</WPageItem>
    <WPageItem active>2</WPageItem>
    <WPageItem>3</WPageItem>
    <WPageItem disabled>4</WPageItem>
    <WPageItem>5</WPageItem>
    <WPageItem>
        <span aria-hidden="true">&raquo;</span>
    </WPageItem>
  </WPagination>
</nav>

```html

<nav aria-label="Page navigation example">
    <Pagination class="pagination">
        <PageItem>
            <span aria-hidden="true">&laquo;</span>
        </PageItem>
        <PageItem>1</PageItem>
        <PageItem active>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem disabled>4</PageItem>
        <PageItem>5</PageItem>
        <PageItem>
            <span aria-hidden="true">&raquo;</span>
        </PageItem>
    </Pagination>
</nav>
```

## Sizing

Use prop `size` with values `lg` or `sm`.

### Large Pagination

<nav aria-label="...">
    <WPagination size="lg">
        <WPageItem active>1</WPageItem>
        <WPageItem>2</WPageItem>
        <WPageItem>3</WPageItem>
        <WPageItem>4</WPageItem>
        <WPageItem>5</WPageItem>
    </WPagination>
</nav>

```html

<nav aria-label="...">
    <Pagination size="lg">
        <PageItem active>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
    </Pagination>
</nav>
```

### Small Pagination

<nav aria-label="...">
    <WPagination size="sm">
        <WPageItem active>1</WPageItem>
        <WPageItem>2</WPageItem>
        <WPageItem>3</WPageItem>
        <WPageItem>4</WPageItem>
        <WPageItem>5</WPageItem>
    </WPagination>
</nav>

```html

<nav aria-label="...">
    <Pagination size="sm">
        <PageItem active>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
    </Pagination>
</nav>
```

## Alignment

Use prop `align` to align pagination with respect to its container. Supported values of `align` props are `right`|`end`
|`center`. `right`|`end` values are identical for `align` prop.

### Center Alignment

<nav aria-label="...">
    <WPagination align="center">
        <WPageItem active>1</WPageItem>
        <WPageItem>2</WPageItem>
        <WPageItem>3</WPageItem>
        <WPageItem>4</WPageItem>
        <WPageItem>5</WPageItem>
    </WPagination>
</nav>

```html

<nav aria-label="...">
    <Pagination align="center">
        <PageItem active>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
    </Pagination>
</nav>
```

### Right Alignment

<nav aria-label="...">
    <WPagination align="end">
        <WPageItem active>1</WPageItem>
        <WPageItem>2</WPageItem>
        <WPageItem>3</WPageItem>
        <WPageItem>4</WPageItem>
        <WPageItem>5</WPageItem>
    </WPagination>
</nav>

```html

<nav aria-label="...">
    <Pagination align="end">
        <PageItem active>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
        <PageItem>5</PageItem>
    </Pagination>
</nav>
```

## Dynamic Page Item Generation

Page Items can be generated dynamically. In that case, you have to specify the props `total-rows`, `per-page`
and `current-page`. `v-model` can be used in lieu of `current-page` prop. These two props are identical.

<nav aria-label="...">
<WPagination :current-page="3" :total-rows="1000" :per-page="10"/>
</nav>

```html

<nav aria-label="...">
    <Pagination :current-page="3" :total-rows="1000" :per-page="10"/>
</nav>
```

## Items Separation

Each Dynamic `Pagination` component has three columns. By default, each column contains maximum of three items. You can
modify these quantities by using props `first-col-page-count`,`center-col-page-count` and `last-col-page-count`.

<nav aria-label="...">
<WPagination :current-page="currentPage"
:first-col-page-count="firstColPageCount"
:center-col-page-count="centerColPageCount"
:last-col-page-count="lastColPageCount"
:total-rows="totalRows" 
:per-page="perPage">
    </WPagination>
</nav>

Total Rows : <input v-model="totalRows" type="number"/><br>
Per Page : <input v-model="perPage" type="number"/><br>
Current Page : <input v-model="currentPage" type="number"/><br>
First Col Page Count : <input v-model="firstColPageCount" type="number"/><br>
Center Col Page Count : <input v-model="centerColPageCount" type="number"/><br>
Last Col Page Count : <input v-model="lastColPageCount" type="number"/><br>

```vue

<template>
    <nav aria-label="...">
        <Pagination
            :current-page="currentPage"
            :first-col-page-count="firstColPageCount"
            :center-col-page-count="centerColPageCount"
            :last-col-page-count="lastColPageCount"
            :total-rows="totalRows"
            :per-page="perPage">
        </Pagination>
    </nav>
    Total Rows : <input v-model="totalRows" type="number"/><br>
    Per Page : <input v-model="perPage" type="number"/><br>
    Current Page : <input v-model="currentPage" type="number"/><br>
    First Col Page Count : <input v-model="firstColPageCount" type="number"/><br>
    Center Col Page Count : <input v-model="centerColPageCount" type="number"/><br>
    Last Col Page Count : <input v-model="lastColPageCount" type="number"/><br>
</template>
<script setup>
import {ref} from "vue";

const totalRows = ref(1000);
const perPage = ref(10);
const currentPage = ref(5);
const firstColPageCount = ref(3);
const centerColPageCount = ref(3);
const lastColPageCount = ref(3);
</script>
```

<script setup>
import {ref} from "vue"; 

const totalRows=ref(1000);
const perPage=ref(10);
const currentPage=ref(5);
const firstColPageCount=ref(3);
const centerColPageCount=ref(3);
const lastColPageCount=ref(3);
</script>