# Aspect Ratio

`<Aspect>` component is a wrapper of `Bootstrap 5`'s `ratio` helper. It uses `ratio` helper classes under the hood.
Default value of `ratio` is `16x9`. Supported values of `ratio` prop are:

```ts
type ratio = '1x1' | '4x3' | '16x9' | '21x9' | number
```

<<< @/../samples/aspect/ExOverview.vue

<Sample><ExOverview/></Sample>



<script lang="ts" setup>
import ExOverview from "../../../samples/aspect/ExOverview.vue";
</script>