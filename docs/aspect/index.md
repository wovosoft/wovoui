# Aspect Ratio

`<Aspect>` component is a wrapper of `Bootstrap 5`'s `ratio` helper. It uses `ratio` helper classes under the hood.
Default value of `ratio` is `16x9`. Supported values of `ratio` prop are:

```ts
type ratio = '1x1' | '4x3' | '16x9' | '21x9' | number
```

```html
<Select v-model="ratio" :options="['16x9','21x9','4x3','1x1',50,100]"></Select>
<Aspect :ratio="ratio">
    <iframe src="https://player.vimeo.com/video/678344029?h=0458dff732"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen></iframe>
</Aspect>
```

<WSelect v-model="ratio" :options="['16x9','21x9','4x3','1x1',50,100]"></WSelect>
<WAspect :ratio="ratio">
<iframe src="https://www.youtube.com/embed/z3grFwJwrD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</WAspect>


<script setup>
import {ref} from "vue"; 

const ratio=ref('16x9');
</script>