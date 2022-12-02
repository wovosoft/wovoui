# Breadcrumbs

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS
through `::before` and `content`.

<<< @/../samples/breadcrumbs/ExOverview.vue

<Sample><ExOverview/></Sample>


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

<<< @/../samples/breadcrumbs/ExManuallyPlacedItems.vue

<Sample><ExManuallyPlacedItems/></Sample>

Remember to set the active prop on the last item.

<script lang="ts" setup>
import ExOverview from "../../../samples/breadcrumbs/ExOverview.vue";
import ExManuallyPlacedItems from "../../../samples/breadcrumbs/ExManuallyPlacedItems.vue";
</script>