# Badges

Documentation and examples for badges, our small count and labeling component.

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5,
badges no longer have focus or hover styles for links.

<<< @/../samples/badges/ExOverview.vue

<Sample><ExOverview/></Sample>

## Buttons

Badges can be used as part of links or buttons to provide a counter.

<<< @/../samples/badges/ExButtons.vue

<Sample><ExButtons/></Sample>

## Positioned

Badges can be positioned in different corners depending on its parent. Use values
`top-right`, `top-left`, `bottom-right` or `bottom-left` for `position` property.

<<< @/../samples/badges/ExPositions.vue

<Sample><ExPositions/></Sample>


## Background colors

User color variants  `primary` ,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark` for `variant` property to
achieve different backgrounds.

<<< @/../samples/badges/ExBackgroundColors.vue

<Sample><ExBackgroundColors/></Sample>

## Pill badges

Use prop `pill`

<<< @/../samples/badges/ExPillBadges.vue

<Sample><ExPillBadges/></Sample>

<script lang="ts" setup>
import ExOverview from "../../../samples/badges/ExOverview.vue";
import ExPositions from "../../../samples/badges/ExPositions.vue";
import ExButtons from "../../../samples/badges/ExButtons.vue";
import ExBackgroundColors from "../../../samples/badges/ExBackgroundColors.vue";
import ExPillBadges from "../../../samples/badges/ExPillBadges.vue";
</script>