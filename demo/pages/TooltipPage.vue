<template>
    <template v-for="dir in ['top','right','bottom','left']">
        <Button :id="dir" class="m-2">Show Tooltip on Hover</Button>
        <Tooltip :target="dir" :placement="dir">
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </Tooltip>
    </template>
</template>

<script lang="ts" setup>
import {Tooltip, Button} from "../../src";
</script>
