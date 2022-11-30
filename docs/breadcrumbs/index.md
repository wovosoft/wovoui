# Breadcrumbs

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS
through `::before` and `content`.

<div class="bootstrap">
<WBreadcrumb :items="items1"/>
</div>

```vue
<Breadcrumb :items="[
  {
    text: 'Home',
    href: 'https://google.com'
  },
  {
    text: 'Posts',
    to: { name: 'home' }
  },
  {
    text: 'Another Story',
    active: true
  }
]"></Breadcrumb>
```

## Breadcrumb items

Items are rendered using <code>:`items`</code> prop. It can be an array of objects to provide link and active state.
Links can be href's for anchor tags, or to's for router-links. Active state of last element is automatically set if it
is undefined.

```javascript
const items = [
    {
        text: 'Home',
        href: 'https://google.com'
    },
    {
        text: 'Posts',
        to: {name: 'home'}
    },
    {
        text: 'Another Story',
        active: true
    }
]
```

## Manually placed items

You may also manually place individual `<BreadcrumbItem>` child components in the default slot of the `<Breadcrumb>`
component, as an alternative to using the items prop, for greater control over the content of each item:

<div class="bootstrap">
<WBreadcrumb>
    <WBreadcrumbItem href="#home">
        <WIcon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></WIcon>
        Home
    </WBreadcrumbItem>
    <WBreadcrumbItem href="#foo">Foo</WBreadcrumbItem>
    <WBreadcrumbItem href="#bar">Bar</WBreadcrumbItem>
    <WBreadcrumbItem active>Baz</WBreadcrumbItem>
</WBreadcrumb>
</div>

```vue
<Breadcrumb>
    <BreadcrumbItem href="#home">
        <Icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></Icon>
        Home
    </BreadcrumbItem>
    <BreadcrumbItem href="#foo">Foo</BreadcrumbItem>
    <BreadcrumbItem href="#bar">Bar</BreadcrumbItem>
    <BreadcrumbItem active>Baz</BreadcrumbItem>
</Breadcrumb>
```

Remember to set the active prop on the last item.

<script>
export default {
    data() {
        return {
            items1: [
                {
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    }
}
</script>