<template>
    <ButtonToolbar justified aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="First group">
            <Button variant="secondary" outline>1</Button>
            <Button variant="secondary" outline>2</Button>
            <Button variant="secondary" outline>3</Button>
            <Button variant="secondary" outline>4</Button>
        </ButtonGroup>
        <InputGroup class="input-group">
            <InputGroupText>@</InputGroupText>
            <Input
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
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
