<template>
    <template v-for="dir in ['top','left','bottom','right']">
        <Button :id="dir" class="m-2">Show Tooltip on Hover</Button>
        <Tooltip :target="dir" :placement="dir">
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </Tooltip>
    </template>
</template>

<script lang="ts" setup>
import {Button, Tooltip} from "@/";
</script>
