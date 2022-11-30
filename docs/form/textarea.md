#   Textarea

<WTextarea v-model="val1"/>
{{val1}}

```html
<Textarea v-model="val1"/>
{{val1}}
```

<script setup>
import {ref} from "vue"; 

const val1=ref('')
</script>