# Button Groups

Group a series of buttons together on a single line or stack them in a vertical column.

## Basic example

<<< @/../samples/buttons/groups/ExBasic.vue

<Sample><ExBasic/></Sample>

## Mixed styles

<<< @/../samples/buttons/groups/ExMixed.vue

<Sample><ExMixed/></Sample>

### Outlined styles

<<< @/../samples/buttons/groups/ExOutlined.vue

<Sample><ExOutlined/></Sample>

You can also make similar result by following way without using `outline` prop.

## Basic checkbox toggle button group

<Sample><ExBasicWithToggleButton/></Sample>

## Button toolbar

Combine sets of button groups into button toolbars for more complex components.

<<< @/../samples/buttons/groups/ExToolbar.vue

<Sample><ExToolbar/></Sample>

Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some
utilities though to space things properly.

<<< @/../samples/buttons/groups/ExToolbarInputGroup.vue

<Sample><ExToolbarInputGroup/></Sample>

## Justified Toolbar

<<< @/../samples/buttons/groups/ExJustified.vue

<Sample><ExJustified/></Sample>

## Sizing

Instead of applying button sizing to every button in a group, just add size to each button group, including each one
when nesting multiple groups.

<<< @/../samples/buttons/groups/ExSizing.vue

<Sample><ExSizing/></Sample>

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally by setting the `vertical`
prop. Split button dropdowns are not supported here.

<<< @/../samples/buttons/groups/ExVertical.vue

<Sample><ExVertical/></Sample>

## Dropdown menu support

Add `<Dropdown>` menus directly inside your `<ButtonGroup>`. Note that split dropdown menus are not supported when
prop `vertical` is set.


<<< @/../samples/buttons/groups/ExDropdown.vue

<Sample><ExDropdown/></Sample>

## Properties

<Properties/>

<script lang="ts" setup>
import ExBasic from "../../../../samples/buttons/groups/ExBasic.vue";
import ExDropdown from "../../../../samples/buttons/groups/ExDropdown.vue";
import ExJustified from "../../../../samples/buttons/groups/ExJustified.vue";
import ExMixed from "../../../../samples/buttons/groups/ExMixed.vue";
import ExOutlined from "../../../../samples/buttons/groups/ExOutlined.vue";
import ExSizing from "../../../../samples/buttons/groups/ExSizing.vue";
import ExToolbar from "../../../../samples/buttons/groups/ExToolbar.vue";
import ExToolbarInputGroup from "../../../../samples/buttons/groups/ExToolbarInputGroup.vue";
import ExVertical from "../../../../samples/buttons/groups/ExVertical.vue";
import ExBasicWithToggleButton from "../../../../samples/buttons/groups/ExBasicWithToggleButton.vue";
import Properties from "../../../../samples/buttons/groups/Properties.vue";
</script>