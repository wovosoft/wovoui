<template>
    <ButtonToolbar aria-label="Toolbar with button groups and input groups">
        <ButtonGroup size="sm" class="me-1">
            <Button>Save</Button>
            <Button>Cancel</Button>
        </ButtonGroup>
        <InputGroup size="sm" prepend="$" append=".00">
            <Input value="100" class="text-right"/>
        </InputGroup>
    </ButtonToolbar>
</template>

<script lang="ts" setup>
import {ButtonToolbar, ButtonGroup, Button, InputGroup, Input} from "../../../src";
</script>
