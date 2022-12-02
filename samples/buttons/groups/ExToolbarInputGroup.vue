<template>
    <ButtonToolbar class="mb-3" aria-label="Toolbar with button groups">
        <ButtonGroup class="me-2" aria-label="First group">
            <Button variant="secondary" outline>1</Button>
            <Button variant="secondary" outline>2</Button>
            <Button variant="secondary" outline>3</Button>
            <Button variant="secondary" outline>4</Button>
        </ButtonGroup>
        <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
            />
        </InputGroup>
    </ButtonToolbar>
</template>

<script lang="ts" setup>
import {
    ButtonGroup, Button, ButtonToolbar,
    InputGroup, InputGroupText
} from "../../../src";
</script>
