<template>
    <ButtonToolbar key-nav aria-label="Toolbar with button groups">
        <ButtonGroup class="mx-1">
            <Button>&laquo;</Button>
            <Button>&lsaquo;</Button>
        </ButtonGroup>
        <ButtonGroup class="mx-1">
            <Button>Edit</Button>
            <Button>Undo</Button>
            <Button>Redo</Button>
        </ButtonGroup>
        <ButtonGroup class="mx-1">
            <Button>&rsaquo;</Button>
            <Button>&raquo;</Button>
        </ButtonGroup>
    </ButtonToolbar>
</template>

<script lang="ts" setup>
import {ButtonToolbar, ButtonGroup, Button} from "../../../src";
</script>
