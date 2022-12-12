# Button Toolbar

Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation

**Example 1:** with button groups & Keyboard navigation

<<< @/../samples/buttons/toolbars/ExOne.vue

<Sample><ExOne/></Sample>

**Example 2:** with mixture of small button group and small input group


<<< @/../samples/buttons/toolbars/ExTwo.vue

<Sample><ExTwo/></Sample>

**Example 3:** with button groups and dropdown menu

<<< @/../samples/buttons/toolbars/ExThree.vue

<Sample><ExThree/></Sample>

##  Usage

Feel free to mix input groups and dropdowns with button groups in your toolbars. Similar to the example above,
you'll likely need some utility classes though to space things properly.

##  Sizing

Note, if you want smaller or larger buttons or controls, set the `size` prop directly on the
`<ButtonGroup>`, `<InputGroup>`, and `<Dropdown>` components.

##  Justify

Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups
and dropdowns, by setting the prop `justify`.

##  Keyboard navigation

Enable optional keyboard navigation by setting the prop `key-nav`.

<script lang="ts" setup>
import ExOne from "../../../../samples/buttons/toolbars/ExOne.vue";
import ExTwo from "../../../../samples/buttons/toolbars/ExTwo.vue";
import ExThree from "../../../../samples/buttons/toolbars/ExThree.vue";
</script>