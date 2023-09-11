<script lang="ts" setup>
import ExampleBasic from "../../../samples/accordions/Basic.vue";
import AccordionFlush from "../../../samples/accordions/Flush.vue";
import AlwaysOpen from "../../../samples/accordions/AlwaysOpen.vue";
import Group from "../../../samples/accordions/Group.vue";
</script>

# Accordion

Accordions are vertical collapsible elements. More details
[here](https://getbootstrap.com/docs/5.2/components/accordion/)

## Default Accordion

Click the accordions below to expand/collapse the accordion content.

<<< @/../samples/accordions/Basic.vue

::: raw
<Sample>
<ExampleBasic/>
</Sample>
:::


## Flush

Add prop `flush` to remove the default `background-color`, some `borders`, and some rounded `corners` to render
accordions `edge-to-edge` with their parent container.

<<< @/../samples/accordions/Flush.vue

::: raw
<Sample><AccordionFlush/></Sample>
:::

# Always open

Add prop `always-open` to the accordion itself to stay open its child items.

<<< @/../samples/accordions/AlwaysOpen.vue

::: raw
<Sample><AlwaysOpen/></Sample>
:::

## `openAll`, `collapseAll`, `toggleAll` exposed methods

`<Accordion>` component has few exposed methods to toggle/collapse/open it's children.

- openAll
- collapseAll
- toggleAll

<<< @/../samples/accordions/Group.vue

::: raw
<Sample><Group/></Sample>
:::

## `modelValue`

Coming Later...