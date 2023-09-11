# Collapse

Easily toggle visibility of almost any content on your pages in a vertically collapsing container. Includes support for
making accordions. Visibility can be easily toggled with our v-b-toggle directive, or via v-model.

<WButton @click="collapse1=!collapse1">Toggle Collapse</WButton>

<WCollapse v-model="collapse1">
<div class="border p-3">
Some placeholder content for the collapse component. 
This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</WCollapse>

```vue

<Button @click="collapse1=!collapse1">Toggle Collapse</Button>
<Collapse v-model="collapse1">
<div class="border p-3">
    Some placeholder content for the collapse component.
    This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</Collapse>

<script>
import {ref} from "vue";

export default {
    setup(props) {
        return {
            collapse1: ref(false)
        }
    }
}
</script>
```

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the prop `horizontal` to transition the
width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use
inline styles, or use our [width utilities](https://getbootstrap.com/docs/5.1/utilities/sizing/).

Note: Working on it. Needs improvements.

<WButton @click="collapse3=!collapse3">Toggle Collapse</WButton>

<WCollapse v-model="collapse3" horizontal>
<div class="border p-3">
Some placeholder content for the collapse component. 
This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</WCollapse>

## Initial visibility (start expanded)

<WButton @click="collapse2=!collapse2">Toggle Collapse</WButton>

<WCollapse v-model="collapse2">
<div class="border p-3">
Some placeholder content for the collapse component. 
This panel is hidden by default but revealed when the user activates the relevant trigger.
</div>
</WCollapse>

<script>
import {ref} from "vue"; 

export default {
    setup(props){
        return{
            collapse1:ref(false),
            collapse2:ref(true),
            collapse3:ref(false),
        }
    }
}
</script>