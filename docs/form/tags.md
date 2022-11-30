# Form Tags

Lightweight custom tagged input form control, with options for customized interface rendering, duplicate tag detection
and optional tag validation.

Tags are arrays of short strings, used in various ways such as assigning categories. Use the default user interface, or
create your own custom interface via the use of the default scoped slot.

## Basic usage

Tags will have any leading and tailing whitespace removed, and duplicate tags are not permitted. Tags that contain
spaces are permitted by default.

Tags are added by clicking the Add button, pressing the Enter key or optionally when the change event fires on the new
tag input (i.e. when focus moves from the input). The Add button will only appear when the user has entered a new tag
value.

**Default render:**

<WTags v-model="tag_values" remove-on-delete></WTags>

{{tag_values}}

<script>
import {reactive} from "vue"; 

export default {
    setup(props,context){
        return {
            tag_values:reactive(['one','two'])
        }
    }
}
</script>

```vue

<template>
    <Tags v-model="tag_values" remove-on-delete></Tags>

    {{tag_values}}
</template>

<script>
import {reactive} from "vue";
import {Tags} from "@wovosoft/wovoui";

export default {
    components: {Tags},
    setup(props, context) {
        return {
            tag_values: reactive(['one', 'two'])
        }
    }
}
</script>
```

ou can disable adding a new tag when pressing Enter via the no-add-on-enter prop, and enable adding a tag on the input's
change event via the add-on-change prop.

## Tag creation using separators

To auto create tags when a `separator` character is typed (i.e. Space, ,, etc.), set the `separator` prop to the character
that will trigger the tag to be added. If multiple separator characters are needed, then include them as a single
string (i.e. ` ,;`), or an array of characters (i.e. `[' ', ',', ';']`), which will trigger a new tag to be added when
Space, ,, or ; are typed). Separators must be a single character.

The following example will auto create a tag when Space, ,, or ; are typed: