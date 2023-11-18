# Menu

It is made on top off `<Accordion>` plugin. So, all the props of `<Accordion>` component will be applicable to `<Menu>`
component. Also be aware while changing styles for `.accordion` and its descendent classes, because `<Menu>` component
has all the classes of `<Accordion>` component. For more details, You can inspect the example given below.This component
is useful in making sidebar menu.

<WMenu :items="items"></WMenu>

```html

<template>
    <Menu :items="items"></Menu>
</template>

<script setup lang="ts">
    import {Menu} from "@wovosoft/wovoui";

    const items = [
        {
            text: "One",
            link: "#one"
        },
        {
            text: "Two",
            link: "#one"
        },
        {
            text: "Three",
            link: "#one",
            children: [
                {
                    text: "Child Two",
                    link: "#one"
                },
                {
                    text: "Child One",
                    link: "#one",
                    children: [
                        {
                            text: "Child One",
                            link: "#one"
                        },
                        {
                            text: "Child Two",
                            link: "#one"
                        },
                    ]
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
                {
                    text: "Child One",
                    link: "#one",
                    children: [
                        {
                            text: "Child One",
                            link: "#one"
                        },
                        {
                            text: "Child Two",
                            link: "#one"
                        },
                    ]
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
            ]
        },
        {
            text: "Four",
            link: "#one"
        },
        {
            text: "Five",
            link: "#one",
            children: [
                {
                    text: "Child One",
                    link: "#one"
                },
                {
                    text: "Child Two",
                    link: "#one"
                },
            ]
        },

    ]
</script>

```

<script setup>
const items = [
    {
        text: "One",
        link: "#one"
    },
    {
        text: "Two",
        link: "#one"
    },
    {
        text: "Three",
        link: "#one",
        children:[
            {
                text: "Child Two",
                link: "#one"
            },
            {
                text: "Child One",
                link: "#one",
                children:[
                    {
                        text: "Child One",
                        link: "#one"
                    },
                    {
                        text: "Child Two",
                        link: "#one"
                    },
                ]
            },
            {
                text: "Child Two",
                link: "#one"
            },
            {
                text: "Child One",
                link: "#one",
                children:[
                    {
                        text: "Child One",
                        link: "#one"
                    },
                    {
                        text: "Child Two",
                        link: "#one"
                    },
                ]
            },
            {
                text: "Child Two",
                link: "#one"
            },
        ]
    },
    {
        text: "Four",
        link: "#one"
    },
    {
        text: "Five",
        link: "#one",
        children:[
            {
                text: "Child One",
                link: "#one"
            },
            {
                text: "Child Two",
                link: "#one"
            },
        ]
    },

]
</script>

## `items` props

`items` should be an array containing menu items of the type given below. `title` is used to set title for the link
generated and `text` is used for `innerHTML` for that link. Now, if `text` is not present, then it will be used
as `text`.

```ts
type item = {
    title?: string,
    text?: string,
    link?: string | object
}
```

When `link` is string it generates an `<a>` element with provided `link` as `href` attribute value. And when `link` is
object, it generates a `<router-link>` component and considers `link` as value for `to` prop.